function takeScreenshot() 
{
	//var canvas = scene.canvas;
	// here is the most important part because if you dont replace you will get a DOM 18 exception.
	var scene = document.querySelector('a-scene');
	//var canvas = scene.canvas;
	var canvasData = scene.renderer.domElement.toDataURL('image/png');   
	window.location.href=canvasData;
}