sap.ui.define(["sap/m/Image"],
function  (Image) {
	return Image.extend("Image.Imageover.Imageover1.Image",{
		metadata:{
			events:{
				"myFunction" :{}
				
			}
		},
		renderer:{},
		onmouseover:function(){
		this.fireMyFunction();	
		}
		
	});
});