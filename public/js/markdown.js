$(function(){
	// code for add calss in tables
	$("#mdfilewrapper").find('table').addClass('table table-stripped table-bordered');

	// code for set id in heading
	var hdngIde;
    $('#mdfilewrapper h1, #mdfilewrapper h2').each(function(){
    hdngIde = $(this).text().split(' ').join('-').toLowerCase();
		$(this).prop({'id': hdngIde});
	});
});