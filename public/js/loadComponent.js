var printMe
var indicate
var backMe
var showDownload
var refreshMe
var archiveMe
var publishMe
var unpublishMe
var deleteMe
var activeMe
var inactiveMe
var enableMe
var disableMe
var updateMe
var showHome
var hideHome
var hindiView
var englishView
var showExcel
var pageHeader
var strFirstLink
var strMiddleLink
var strLastLink
function downloadURI(uri, name)
{
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

// *** Script for get Absolute path and Updated by Amitashree Mallick on 28th Feb 2018 ****//
var host = window.location.host;
var pathInfo = window.location.pathname;
//var path		= pathInfo.split("/");
var FN1 = pathInfo.split('/')[1];
var FN2 = pathInfo.split('/')[2];
if(FN1 != ''){
    var appURL = "http://" + host + "/" + FN1;
}else{
    var appURL = "http://" + host;
}
//var URL = "http://" + host + "/" + FN1 + "/";
//var siteUrl = "http://" + host + "/" + FN1 + "/" + FN2;


$(document).ready(function () {
    //$('[data-rel=tooltip]').tooltip();
    //bindHeader('header','footertext','footerUrl');
    //history.forward(1);
    if ($('.chkAll').length > 0)
    {
        $('.chkAll').on('click', function () {
            if ($(this).is(':checked'))
                $('.chkItem').prop('checked', true);
            else
                $('.chkItem').prop('checked', false);
        });
    }
    if ($('.chkItem').length > 0)
    {
        $('.chkItem').on('click', function () {
            var chkAllFlag = 0;
            $('.chkItem').each(function () {
                if ($(this).is(':checked'))
                    chkAllFlag++;
            });
            if (Number(chkAllFlag) == Number($('.chkItem').length))
                $('.chkAll').prop('checked', true);
            else
                $('.chkAll').prop('checked', false);
        });
    }
    
    /* $(document).keypress(function(e) {
        if(e.which == 13) 
        {
            if($('#btnAlertOk').is(':visible'))
            {
                $('#btnAlertOk').click();
            }
            else if($('#btnConfirmOk').is(':visible'))
            {
                $('#btnConfirmOk').click();
            }
            else if($('#btnUpdateConfirmOk').is(':visible'))
            {
                $('#btnUpdateConfirmOk').click();
            }
            else
            {
                $('.defaultBtn').click();
            }
            return false;
        }
    }); */
    
//    $(document).keypress(function(e) {
//        if(e.which == 9) 
//        {
//            if($('#btnAlertOk').is(':visible'))
//            {
//                $('#btnAlertOk').click();
//            }
//            else
//            {
//                $('.defAlertOk').click();
//            }
//            return false;
//        }
//    });


    // if($('.chkAll2').length>0)
    //{
    $('.chkAll2').on('click', function () {
        if ($(this).is(':checked'))
            $('.chkItem2').attr('checked', true);
        else
            $('.chkItem2').attr('checked', false);
    });
    //}
    //if($('.chkItem2').length>0)
    //{			
    $('.chkItem2').on('click', function () {
        var chkAllFlag = 0;
        $('.chkItem2').each(function () {
            if ($(this).is(':checked'))
                chkAllFlag++;
        });
        if (Number(chkAllFlag) == Number($('.chkItem2').length))
            $('.chkAll2').attr('checked', true);
        else
            $('.chkAll2').attr('checked', false);
    });
    //}

});

function downloadExcel()
{
    //alert();

    var actions = "export";
    //$("#hdn_ids").val(PId);
    $("#hdn_qs").val(actions);


    $('#frmTCP').submit();
    $("#hdn_qs").val('');

    //window.location.reload();
}
function convertToSlug(Text, bindId)
{
    var slug = Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    $("#" + bindId).val(slug);
}

function configTitleBar()
{
    if ($("#title"))
    {
        $("#title").html(pageHeader);
    }

    var FirstLink = strFirstLink;
    var MiddleLink = strMiddleLink;
    var LastLink = strLastLink;
    var pageTitle = pageHeader;
    var totLink = "";
    if (FirstLink == "")
    {
        //FirstLink = "";
        totLink = " <li class='active'> " + LastLink + "</li>";
    }
    else
    {
        //FirstLink = "<li>" +  FirstLink + " </li>";//FirstLink+"&nbsp;/";
        totLink = "<li>" + FirstLink + " </li><li>" + MiddleLink + "</li><li>" + LastLink + "</li>";
    }

    $('#title').html(pageTitle);
    $('#navigation').html('<li><a href="' + appURL + '/dashboard" alt="Home" title="" data-original-title="Dashboard" ><i class="ace-icon fa fa-home home-icon"></i></a></li>' + totLink);
}
// *** Script for Print page a****//
function PrintPage() {
    var windowName = "PrintPage";
    var wOption = "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    var cloneTable = $("#viewTable").clone();
    var head = $('#viewTable thead tr');
    //$("#viewTable tbody tr:nth-child(10n+10)").after(head.clone());

    cloneTable.find('input[type=text],select,textarea').each(function () {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SELECT')
        {

            if ($(this).val() > 0)
                var textVal = $(this).find("option:selected").text();
            else
                textVal = '';
        }
        else
            var textVal = $(this).val();
        $(this).replaceWith('<label>' + textVal + '</label>');
    });
    cloneTable.find('a').each(function () {
        var anchorVal = $(this).html();
        $(this).replaceWith('<label>' + anchorVal + '</label>');
    });
    var pageTitle = $("#title").text();
    var wWinPrint = window.open("", windowName, wOption);
    wWinPrint.document.open();
    wWinPrint.document.write("<html><head><link href='" + appURL + "/css/print.css' rel='stylesheet'><title></title></head><body>");
    wWinPrint.document.write("<div id='header'><div class='pull-left text_logo'><h1 class='logo'>LEGAL<!--img src='" + URL + "/img/printLogoICDS.png' alt='LEGAL'--></h1></div><div class='clear'>&nbsp;</div></div>")
    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + cloneTable.html() + "</div>");
    wWinPrint.document.write("<div id='printFooter'>&copy; 2018, LEGAL</div>");
    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    return wWinPrint;
}

//===================== Function to print modal content By Sunil Kumar Parida On 3-Jan-2015 ==========
function printModal(title, content)
{
    var windowName = "PrintPage";
    var wOption = "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    var cloneTable = $("#" + content).clone();
    cloneTable.find('input[type=text],select,textarea').each(function () {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SELECT')
            var textVal = $(this).find("option:selected").text();
        else
            var textVal = $(this).val();
        $(this).replaceWith('<label>' + textVal + '</label>');
    });
    cloneTable.find('a').each(function () {
        var anchorVal = $(this).html();
        $(this).replaceWith('<label>' + anchorVal + '</label>');
    });
    var pageTitle = $("#" + title).text();
    var wWinPrint = window.open("", windowName, wOption);
    wWinPrint.document.open();
    wWinPrint.document.write("<html><head><link href='" + URL + "/css/print.css' rel='stylesheet'><title></title></head><body>");
    wWinPrint.document.write("<div id='header'><div class='pull-left text_logo'><h1 class='logo'>LEGAL<!--img src='" + URL + "/img/printLogoICDS.png' alt='Directorate of Bihar Gram Swaraj Yojana Society'--></h1></div><div class='clear'>&nbsp;</div></div>")
    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + cloneTable.html() + "</div>");
    wWinPrint.document.write("<div id='printFooter'>&copy; 2018, LEGAL</div>");
    wWinPrint.document.write("</body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    return wWinPrint;

}


function showHindiEng(idVal)
{
    if (idVal == 1)
    {
        $('#btnHindi').show();
        $('#btnEng').hide();
    }
    else
    {

        $('#btnHindi').hide();
        $('#btnEng').show();
    }

}
