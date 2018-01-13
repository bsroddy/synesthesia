function colorTag(char, color_scheme){
      var tags = colorToTag(color_scheme[char]);
      return tags[0]+char+tags[1];
}

function colorToTag(color){
    retval = new Array(2);
    retval[0] = "<font color=\""+color+"\">";
    retval[1] = "</font>";
    return retval;
}

function convertToColor (target, color_scheme){
	   var in_tag = false;
	   var retVal = "";
    for (idx=0;idx <target.length;idx++)
         {
         	    if (target.charAt(idx)== '<')
         	    {
         	    	   in_tag=true;
         	    }
         	    else if (target.charAt(idx) == '>')
         	    {
         	    	    in_tag=false;
         	    }
         	    else if (in_tag == false)
         	    {
         	    	    retVal = retVal + colorTag(target.charAt(idx), color_scheme);
         	    }
         }
    return retVal;
	
}

function colorDom(color_scheme){
    var p_arr = document.getElementsByTagName("p");
    var h1_arr = document.getElementsByTagName("h1");
    var h2_arr = document.getElementsByTagName("h2");
    var h3_arr = document.getElementsByTagName("h3");
    var h4_arr = document.getElementsByTagName("h4");
    var h5_arr = document.getElementsByTagName("h5");
    var h6_arr = document.getElementsByTagName("h6");
    
    var elementArraysToChange = [p_arr, h1_arr, h2_arr, h3_arr, h4_arr,
        h5_arr, h6_arr]
    
    for(var x=0;x<elementArraysToChange.length;x++){
        var currElementArr = elementArraysToChange[x]
        for(var y=0;y<currElementArr.length;y++){
               currElementArr[y].innerHTML = 
                       convertToColor(currElementArr[y].innerHTML,color_scheme);
        }
    }
	
}


var demo_scheme=[];
demo_scheme["a"]="blue";
demo_scheme["b"]="blue";
demo_scheme["c"]="blue";
demo_scheme["d"]="blue";
demo_scheme["e"]="brown";
demo_scheme["f"]="brown";
demo_scheme["g"]="brown";
demo_scheme["h"]="brown";
demo_scheme["i"]="red";
demo_scheme["j"]="red";
demo_scheme["k"]="red";
demo_scheme["l"]="red";
demo_scheme["m"]="green";
demo_scheme["n"]="green";
demo_scheme["o"]="green";
demo_scheme["p"]="green";
demo_scheme["q"]="purple";
demo_scheme["r"]="purple";
demo_scheme["s"]="purple";
demo_scheme["t"]="purple";
demo_scheme["u"]="yellow";
demo_scheme["v"]="yellow";
demo_scheme["w"]="yellow";
demo_scheme["x"]="yellow";
demo_scheme["y"]="pink";
demo_scheme["z"]="pink";
demo_scheme[","]="blue";
demo_scheme[" "]="blue";
demo_scheme["!"]="blue";

colorDom(demo_scheme);