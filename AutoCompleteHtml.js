/*
	This script adds HTML/XML tag-completion functionality to the UltraEdit text editor. For details
	of how to install and use UltraEdit scripts see here:

		http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/scripting_engine_tutorial.html
	
	The script searches backwards through the active document looking for HTML/XML style tags that have
	been opened but not yet closed - the first such tag that is found will have an appropriate closing 
	tag inserted into the document at the cursor location.
	
	HTML/XML/JSP comments, CDATA sections, DOCTYPE declarations and special JSP directives / scriptlets /  
	declarations are all ignored.
	
	The default configuration will ignore the 9 'self-closing' HTML tags contained in the 'ignoredTags' 
	array near the top of the code - when used in an HTML document these tags should not be closed, however 
	in XHTML/XML documents all tags must be closed, so this line should be modified or commented out 
	according to your needs.
	
	For the latest version of this script visit:
		http://codebox.org.uk/pages/ultraedit-scripts/html-xml-tag-auto-complete
	
	For licensing information go to: 
		http://codebox.org.uk/pages/about
	
 */
 
if (CODEBOX === undefined){
	var CODEBOX	= {};
}

CODEBOX.tagComplete = function(){
	var closedTags = [], tag, haveRestored = false, parts = [];
	var whitespaceRegex = /^\s+|\s+$/g;
	var ignoredTags = ['area', 'base', 'basefont', 'br', 'hr', 'input', 'img', 'link' , 'meta']; // Comment this line out to stop ignoring them
	var doc = UltraEdit.activeDocument;
	var initialPos  = doc.currentPos;
	var previousPos = initialPos;
	var currentPos;
	
 // Remember where we start from
 	var restorePosn = (function(col, line){
 		return function(){
 			doc.gotoLine(line, col+1);
 			haveRestored = true;
 		};
 	})(doc.currentColumnNum, doc.currentLineNum);
	
 // Set up the find options
	doc.findReplace.regExp     = true;
	doc.findReplace.searchDown = false;
	doc.findReplace.mode       = 0;

	function extractTagName(tag){
		if (tag.charAt(0) === '/'){
		 // Strip out the leading slash character if its a closing tag
			tag = tag.substring(1);	
		} else {
		 // Remove any attributes if its an opening tag
			tag = tag.split(/\s/)[0];
		}
		return tag;
	}
	
	function isIgnoredTag(tag){
	 // Is this tag one of the 'ignored' ones listed above
		if (typeof(ignoredTags) !== 'undefined'){
			tag = extractTagName(tag);			
			for(var i=0, l=ignoredTags.length; i<l; i++){
				if (ignoredTags[i] === tag){
					return true;	
				}
			}
		}
		return false;
	}

	while (true) {
		previousPos = currentPos;
		tag = getNextTag();
		if (!isIgnoredTag(tag)){
			currentPos = doc.currentPos;
	
			if (previousPos <= currentPos){
			 // Our search has hit the top of the document and begun again from the bottom, so stop
				break;	
			}
			
			if (tag.length > 0){
				if (tag.charAt(0) === '/'){
				 // This is a closing tag, eg </div> - push it onto the stack and continue searching
					closedTags.push(extractTagName(tag));
					
				} else if (tag.charAt(tag.length - 1) === '/'){
				 // This is an empty element, eg <div /> - ignore and continue	
				
				} else {
				 /* If the tag has attributes we want to remove them, so split tag contents on 
				    whitespace and take the first part */
					tag = extractTagName(tag);
					
					if ((closedTags.length > 0) && (tag === closedTags[closedTags.length - 1])){
					 /* This is an opening tag but there is already a corresponding closing tag, so just
					    pop the entry off the stack and continue moving back through the document */
						closedTags.pop();
						
					} else {
					 /* This looks like an opening tag that has no corresponding close tag, so move back
					    to where we started from and write one. */
						restorePosn();
						doc.write('</' + tag + '>');
						break;
					}
				}
			}
		}
	};
	
	if (!haveRestored) {
		restorePosn();
	}
	
	function getNextTag(){
	 /* Search backwards through the document looking for text inside angle-brackets, ignoring
	    anything that looks like an XML/HTML comment, a CDATA tag, a DOCTYPE declaration, or 
	    any of the special JSP directives  */
		function trim(txt){
			return txt.replace(whitespaceRegex, '');
		}
		doc.findReplace.find("<[^!%\?>][^>]*>");
		var match = doc.selection;
	
		if (match.length > 2){
		 // remove the brackets and just return what's inside
			return trim(match.substring(1, match.length - 1));
		} else {
			return '';	
		}
	}
	
};

CODEBOX.tagComplete();