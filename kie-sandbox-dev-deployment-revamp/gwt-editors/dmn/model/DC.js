var DC_Module_Factory=function(){return{DC:{name:"DC",defaultElementNamespaceURI:"http://www.omg.org/spec/DMN/20180521/DC/",typeInfos:[{localName:"Dimension",propertyInfos:[{name:"width",required:!0,typeInfo:"Double",attributeName:{localPart:"width"},type:"attribute"},{name:"height",required:!0,typeInfo:"Double",attributeName:{localPart:"height"},type:"attribute"}]},{localName:"Point",propertyInfos:[{name:"x",required:!0,typeInfo:"Double",attributeName:{localPart:"x"},type:"attribute"},{name:"y",required:!0,typeInfo:"Double",attributeName:{localPart:"y"},type:"attribute"}]},{localName:"Bounds",propertyInfos:[{name:"x",required:!0,typeInfo:"Double",attributeName:{localPart:"x"},type:"attribute"},{name:"y",required:!0,typeInfo:"Double",attributeName:{localPart:"y"},type:"attribute"},{name:"width",required:!0,typeInfo:"Double",attributeName:{localPart:"width"},type:"attribute"},{name:"height",required:!0,typeInfo:"Double",attributeName:{localPart:"height"},type:"attribute"}]},{localName:"Color",propertyInfos:[{name:"red",required:!0,typeInfo:"Int",attributeName:{localPart:"red"},type:"attribute"},{name:"green",required:!0,typeInfo:"Int",attributeName:{localPart:"green"},type:"attribute"},{name:"blue",required:!0,typeInfo:"Int",attributeName:{localPart:"blue"},type:"attribute"}]},{type:"enumInfo",localName:"KnownColor",values:["maroon","red","orange","yellow","olive","purple","fuchsia","white","lime","green","navy","blue","aqua","teal","black","silver","gray"]},{type:"enumInfo",localName:"AlignmentKind",values:["start","end","center"]}],elementInfos:[{typeInfo:".Dimension",elementName:"Dimension"},{typeInfo:".Point",elementName:"Point"},{typeInfo:".Bounds",elementName:"Bounds"},{typeInfo:".Color",elementName:"Color"}]}}};if("function"==typeof define&&define.amd)define([],DC_Module_Factory);else{var DC_Module=DC_Module_Factory();if("undefined"!=typeof module&&module.exports)module.exports.DC=DC_Module.DC;else var DC=DC_Module.DC}