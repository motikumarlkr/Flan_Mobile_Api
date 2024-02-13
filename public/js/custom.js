//var siteUrl = sitePath;
//var appURL = appPath;
//var publicURL = publicPath;
//var helperURL	= helperPath;
$(document).ready(function () {
    $('[data-toggle=tooltip]').tooltip();
    //$('[data-rel=tooltip]').tooltip();
    // history.forward(1);
    $('.chkAll').on('click', function () {

        $('.chkItem').prop('checked', $(this).is(':checked'));

    });

    $('.chkItem').on('click', function () {

        if ($(this).is(':checked')) {

            if ($('.chkItem:checked').length == $('.chkItem').length)
                $('.chkAll').prop('checked', $(this).is(':checked'));

        } else {

            $('.chkAll').prop('checked', false);
        }
    });



    //=========start : Add More=========//
    $('body').on('click', '.addMore1', function () {


        if (!validateAddmore())
            return false;

        var parent_tmplt_elem = $(this).parents('.addmr-tmplt');
        var tocp_html = parent_tmplt_elem.html();

        var tocp_classes = parent_tmplt_elem.attr('class');

        var new_elem = '<div class="' + tocp_classes + '">' + tocp_html + '</div>';
        parent_tmplt_elem.after(new_elem);


    })

    $('body').on('click', '.addmr-tmplt .remove1', function () {

        $(this).parents('.addmr-tmplt').remove();

    })

    $('form').on('reset', function () {

        $(this).find('.addmr-tmplt:not(:first)').remove();

    })

    //=========End : Add More=========//     


});

// ******************** function for Date & Time ********************** //
function dateTime(idVal)
{
    //Set Weedday against current day in numeric
    var WeekDay = new Array(7);
    WeekDay[0] = "Sunday";
    WeekDay[1] = "Monday";
    WeekDay[2] = "Tuesday";
    WeekDay[3] = "Wednesday";
    WeekDay[4] = "Thursday";
    WeekDay[5] = "Friday";
    WeekDay[6] = "Saturday";

    //Set month Name against current Month in numeric 
    var monthName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

    var CurDateTime = new Date();
    //alert(CurDate);
    var curDay = CurDateTime.getDay();
    var curDate = CurDateTime.getDate();
    var curMonth = CurDateTime.getMonth();
    var curYear = CurDateTime.getFullYear();
    var curHH = CurDateTime.getHours();
    var curMM = CurDateTime.getMinutes();
    var curSS = CurDateTime.getSeconds();

    if (curHH >= 12)
    {
        curHH = curHH - 12;
        var Hour = "PM";
    }
    else
        var Hour = "AM";

    if (curMM < 10)
        curMM = '0' + curMM;
    if (curSS < 10)
        curSS = '0' + curSS;

    var date = "<span class='clock'>" + WeekDay[curDay] + ", " + monthName[curMonth] + " " + curDate + ", " + curYear + "  " + curHH + ":" + curMM + ":" + curSS + " " + Hour + "</span>";
    //alert(date)
    $('#' + idVal).html(date);
    setTimeout('dateTime(\'' + idVal + '\')', 1000);
}
//======== Function for set cookie value By Sunil Kumar Parida On 11/09/2014 =========
function setCookie(cname, cvalue, exdays)
{
    removeCookie(cname);
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//======== Function for get cookie value By Sunil Kumar Parida On 11/09/2014 =========
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) != -1)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//======== Function for remove cookie By Sunil Kumar Parida On 11/09/2014 =========
function removeCookie(cname)
{
    document.cookie = cname + "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; ";
}
//======== Function for redirect to page By Sunil Kumar Parida On 11/09/2014 =========
function goToPage(page, Gl, Pl, GlName, PlName)
{
    setCookie("GLink", Gl, 2);
    setCookie("PLink", Pl, 2);
   // setCookie("GlName", GlName, 2);
    //setCookie("PlName", PlName, 2);
    window.location.href = page;
}
//======== Function for redirect to page By Sunil Kumar Parida On 11/09/2014 =========
function goToAdminPage(page, Gl, Pl, GlName, PlName)
{
    setCookie("adminGLink", Gl, 2);
    setCookie("adminPLink", Pl, 2);
    //setCookie("adminGlName", GlName, 2);
    //setCookie("adminPlName", PlName, 2);
    window.location.href = page;
}


//Function to textcounter.
function TextCounter(ctlTxtName, lblCouter, numTextSize)
{
    var txtName = $('#' + ctlTxtName).val();
    var txtNameLength = txtName.length;
    if (parseInt(txtNameLength) > parseInt(numTextSize))
    {
        var txtMaxTextSize = txtName.substr(0, numTextSize);
        $("#" + ctlTxtName).val(txtMaxTextSize);
        viewAlert("Entered text exceeds '" + numTextSize + "' characters.");
        $("#" + lblCouter).text(0);
        return false;
    }
    else
    {
        $("#" + lblCouter).text(parseInt(numTextSize) - parseInt(txtNameLength));
        return true;

    }
}
// ****************** function for Delete Records ***************** //
function gotoDelete(action)
{
    var PIds = '';
    $('.chkItem').each(function () {
        if ($(this).is(':checked'))
            PIds += $(this).val() + ',';
    });
    if (PIds.length > 0)
    {
        PIds = PIds.substring(0, PIds.length - 1);
        var pidVal = PIds.split(',');
        var totalcount = pidVal.length;
        for (var i = 0; i < totalcount; i++)
        {
            var pubStatus = $('#hdnPubStatus' + pidVal[i]).val();
            if (pubStatus == 1 && action == 'SH')
            {
                viewAlert("First publish record(s) to display on Homepage.");
                $('#hdnPubStatus' + pidVal[i]).focus();
                return false;
            }


        }
        if (action == 'D')
        {
            confirmAlert('Are you sure to delete selected record(s)?');
        }
        if (action == 'AR')
        {
            confirmAlert('Are you sure to archive selected record(s)?')
        }
        if (action == 'UN')
        {
            confirmAlert('Are you sure to unpublish selected record(s)?')
        }
        if (action == 'AC')
        {
            confirmAlert('Are you sure to enable selected record(s)?')
        }
        if (action == 'P')
        {
            confirmAlert('Are you sure to publish selected record(s)?')
        }
        if (action == 'US')
        {
            confirmAlert('Are you sure to change the position of selected record(s)')
        }
        if (action == 'SH')
        {
            confirmAlert('Are you sure to Display selected record(s) on homepage')
        }
        if (action == 'HH')
        {
            confirmAlert('Are you sure to Hide selected record(s) on homepage')
        }
        if (action == 'UIN')
        {
            confirmAlert('Are you sure to inactivate selected user')
            action = 'IN';
        }
        if (action == 'UAC')
        {
            confirmAlert('Are you sure to activate selected user')
            action = 'AC';
        }
        $('#btnConfirmOk').on('click', function () {

            $("#hdn_ids").val(PIds);
            $("#hdn_qs").val(action);
            $('#listForm').submit();

        });
    }
    else
    {
        viewAlert('Please select a record!');

    }
}

//function DoPaging(CurrentPage, RecordNo)
//{
//    $("#hdn_PageNo").val(CurrentPage);
//    $("#hdn_RecNo").val(RecordNo);
//    $("form").submit();
//}



function displayCkeditor(id)
{
    if (CKEDITOR.instances[id])
    {
        CKEDITOR.remove(CKEDITOR.instances[id]);
    }

    CKEDITOR.replace(id, {
        filebrowserBrowseUrl: URL + "/controller/browser.php",
        filebrowserUploadUrl: URL + "/controller/upload.php?type=files",
        filebrowserImageUploadUrl: URL + "/controller/upload.php?type=images",
        filebrowserFlashUploadUrl: URL + "/controller/upload.php?type=flash"
    });
    CKEDITOR.on('dialogDefinition', function (ev) {
        // Take the dialog name and its definition from the event data.
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;

        // Check if the definition is from the dialog window you are interested in (the "Link" dialog window).
        if (dialogName == 'image') {
            $('#hdnHttp').val('http://');
        }
        else if (dialogName == 'link')
        {
            $('#hdnHttp').val('');
        }
    });
}

// *** Script for show hide search pannel by Sunil Kumar Parida on 18th Oct 2013 ****//

function viewSearchPannel(flag, pannelId, buttonId)
{
    if (flag == 'S')
    {
        $('#' + pannelId).show();
        $('#' + buttonId).html('<i class="fa fa-angle-double-up"></i>');
    }
    else
    {
        $('#' + pannelId).hide();
        $('#' + buttonId).html('<b class="fa fa-angle-double-down"></b>');
    }
    $("#" + buttonId).click(function () {
        $("#" + pannelId).slideToggle(function () {
            if ($("#" + pannelId).is(":hidden"))
            {
                $("#" + buttonId).html('<i class="fa fa-angle-double-down"></i>');
            }
            else
            {
                $('#' + buttonId).html('<i class="fa fa-angle-double-up"></i>');
            }
        });
    });
}

// function to scroll to topposition
function scrollToPosition(id)
{
    $('html, body').animate({scrollTop: $('#' + id).offset().top - 300}, 'slow');
    $('#' + id).focus();
}




function viewAlert(msg, ctrlId, redLoc)
{
   // $('#btnAlertOk').off('click');
    if (typeof (ctrlId) == 'undefined')
    {
        ctrlId = '';
    }
    if (typeof (redLoc) == 'undefined')
    {
        redLoc = '';
    }
    $('#alertModal').modal({backdrop: 'static', keyboard: false});
    $('.alertMessage').html(msg);
    $('#alertModal').on('click', function () {
        $('#alertModal').modal('hide');
        $('#alertModal').hide();
        if (ctrlId != '')
        {
            $('#' + ctrlId).addClass('vfail').focus();
        }
        if (redLoc != '')
        {
            window.location.href = redLoc;
        }
        if (redLoc == 'pr') { //page reload
            window.location.reload();
        }
    });

}


function confirmAlert(msg)
{
    $('#confirmModal').modal({backdrop: 'static', keyboard: false});
    $('.confirmMessage').html(msg);
}

function updateConfirmAlert(msg)
{
    $('#updateModal').modal({backdrop: 'static', keyboard: false})
            .one('click', '#btnUpdtYes', function (e) {
                return true;
            });
    $('.confirmMessage').html(msg);


}


function DoPaging(CurrentPage, RecordNo)
{
    $("#hdn_PageNo").val(CurrentPage);
    $("#hdn_RecNo").val(RecordNo);

    $("#listForm").submit();
}

function AlternatePaging()
{
    if ($('#hdn_IsPaging').val() == "0")
        $("#hdn_IsPaging").val("1");
    else
        $("#hdn_IsPaging").val("0");
    $("#listForm").submit();
}

function PrintPage() {
    $('[data-toggle="tooltip"]').tooltip('hide');
    var windowName = "PrintPage";
    var wOption = "width=1000,height=600,menubar=yes,scrollbars=yes,location=no,left=100,top=100";
    //var cloneTable 	= $(".table").parent().clone();
    var cloneTable = $("#viewTable").clone();
    // cloneTable.find("#directorInfo").show();
    cloneTable.find('input[type=text],select,textarea').not('.noPrint').each(function () {
        var elementType = $(this).prop('tagName');
        if (elementType == 'SELECT')
            var textVal = $(this).find("option:selected").text();
        else
            var textVal = $(this).val();

        $(this).replaceWith('<label>' + textVal + '</label>');
    });
    cloneTable.find('a').each(function () {
        var anchorVal = $(this).html();
        $(this).replaceWith('<span>' + anchorVal + '</span>');
    });
    var pageTitle = $(".page-heading h2").text();

    var wWinPrint = window.open("", windowName, wOption);
    wWinPrint.document.open();
    wWinPrint.document.write("<html><head><link href='" + SITE_URL + "public/css/bootstrap.min.css' rel='stylesheet'><title>" + pageTitle + "</title>");
    wWinPrint.document.write("<link href='" + SITE_URL + "public/css/print.css' rel='stylesheet'>");
    wWinPrint.document.write("</head><body>");
    wWinPrint.document.write("<div id='header' style='margin-bottom:10px;'><img src='" + SITE_URL + "public/images/logo.PNG' border='0' align='absmiddle' alt='Smartcity Admin Console' class='logo pull-left' height='55' /><div class='pull-left text_logo'><h2 style='margin-top:7px;'>E-Shikshakosh</h2></div><a href='javascript:void(0)' title='Print' class='btn btn-success btn-sm pull-right' style='margin-right:10px; margin-top:20px; background-color: #5cb85c;border-width: 1px;font-size: 13px; padding: 4px 9px;color:#fff;text-decoration: none;float: right;border-color: #4cae4c' onclick='$(this).hide();window.print();$(this).show();'><i class='icon-white icon-print'></i> Print</a><div class='clearfix'></div></div>")
    wWinPrint.document.write("<div id='printHeader'>" + pageTitle + "</div>");
    wWinPrint.document.write("<div id='printContent'>" + cloneTable.html() + "</div>");
    wWinPrint.document.write("<div id='printFooter'>&copy;" + getCurrentFiscalYear() + ", E-Shikshakosh</div>");
    wWinPrint.document.write("<script src='" + SITE_URL + "public/js/jquery.min.js' type='text/javascript'></script></body></html>");
    wWinPrint.document.close();
    wWinPrint.focus();
    //wWinPrint.print();
    return wWinPrint;
}


// GET THE CURRENT FISCAL YEAR and Developed By Ajit Kumar Sahoo on 22-SEP-2015//
function getCurrentFiscalYear() {

    //get current date
    var today = new Date();

    //get current month
    var curMonth = today.getMonth();

    var fiscalYr = "";
    if (curMonth > 3) { //
        var nextYr1 = (today.getFullYear() + 1).toString();
        fiscalYr = today.getFullYear().toString() + "-" + nextYr1.charAt(2) + nextYr1.charAt(3);
    } else {
        var nextYr2 = today.getFullYear().toString();
        fiscalYr = (today.getFullYear() - 1).toString() + "-" + nextYr2.charAt(2) + nextYr2.charAt(3);
    }

    //document.write(fiscalYr);
    return fiscalYr;
}



