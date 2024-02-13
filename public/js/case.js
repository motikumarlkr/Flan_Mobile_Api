$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(function () {
    // $('#selRadioDiv').hide();
    getCaseType('intCaseType', intCaseType, OrgID, 'S');

    getCourt('intCourtId', intCourtId, OrgID, 'S');

    if ($("input[name='selRadio']:checked").val() == 1) {
        getOppositeParty('intoppositeParty', intoppositeParty, OrgID, 'S');
    } else {
        getDesignations('intoppositeParty', $('#intDepartmentId').val(), 0, OrgID, 'S');
    }

    getSubjectMatter('intSubjectMatter', intSubjectMatter, OrgID, 'S');
    getDetartments('intDepartmentId', intDepartmentId, OrgID, 'S');

    if (caseID > 0) {
        //document.getElementById("tableHead").style.display = "block";
        $('#tableHead').show();
    } else {
        // document.getElementById("tableHead").style.display = "none";
        $('#tableHead').hide();
    }

    getdemoParentLabel('demoParentLabel', OrgID, Level1, 0);
    getdemoChildLabel('demoChildLabel', OrgID, Level2, 0);
    getFirstLevelOptions(OrgID, Level1, 0);
    if (caseID > 0)
        getSecondLevelOption(OrgID, Level2, parentId);
    else
        getSecondLevelOption(OrgID, Level2, 0);

    $(document).on('click', '.remove', function () {
        var btn = $(this);
        confirmAlert("Are you sure to delete the record(s) ?");
        $('#btnConfirmOk').on('click', function () {
            btn.closest('tr').remove();
        });

    });
    if ($("input[name='selRadio']:checked").val() == 1) {
        $('#selRadioDiv').hide();
        $('#petitonerDetails').hide();
        $('#isCounterReq').hide();


    } else {
        $('#selRadioDiv').show();
        $('#petitonerDetails').show();
        $('#isCounterReq').show();
    }

});

function yes() {
    $("#tableBody").html('');
    $('#selRadioDiv').hide();
    $('#petitonerDetails').hide();
    $('#isCounterReq').hide();
    getOppositeParty('intoppositeParty', intoppositeParty, OrgID, 'S');
    $("#selectedOppParty").val('');

}
function no() {
    $("#tableBody").html('');
    $('#selRadioDiv').show();
    $('#petitonerDetails').show();
    $('#isCounterReq').show();
    getDetartments('intDepartmentId', intDepartmentId, OrgID, 'S');
    getDesignations('intoppositeParty', intDepartmentId, 0, OrgID, 'S');
}


function getdemoParentLabel(ctrlId, OrgId, LevelId, ParentId)
{
    $(".loader-gif").show();
    $.ajax({
        type: "POST",
        url: SITE_URL + 'ajax/getdemoparentlabel',
        dataType: "json",
        data: {method: 'getdemoparentlabel', OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
            $(".loader-gif").hide();
            if (res.status == 200) {
                $('#' + ctrlId).text(res.result[0].strDemoLabelName);
            }
        },
        error: function (res) {
            console.log(res);
        }
    });
}
function getdemoChildLabel(ctrlId, OrgId, LevelId, ParentId)
{
    $(".loader-gif").show();
    $.ajax({
        type: "POST",
        url: SITE_URL + "ajax/getdemochildlabel",
        dataType: "json",
        data: {method: 'getdemochildlabel', OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
            $(".loader-gif").hide();
            if (res.status == 200) {
                $('#' + ctrlId).text(res.result[0].strDemoLabelName);
            }
        },
        error: function (res) {
            console.log(res);
        }
    });
}
function getFirstLevelOptions(OrgId, LevelId, ParentId) {
    $(".loader-gif").show();
    $("#selFirstLevel option").not(':first').remove();
    $.ajax({
        type: "POST",
        url: SITE_URL + "ajax/getdemofirstleveloptions",
        dataType: "json",
        data: {OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
            $(".loader-gif").hide();
            if (res.status == 200 && res.result.length > 0) {
                $(res.result).each(function (i, val) {
                    var selected = '';
                    if (caseID > 0 && parentId == val.intHierarchyId)
                        selected = 'selected';
                    if (OrgId == 2 || OrgId == 1) {
                        $("#selFirstLevel").append("<option value='" + val.intHierarchyId + "' " + selected + ">" + val.strHierarchyName + " (" + val.strParentHierarchyName + ")</option>");
                    } else {
                        $("#selFirstLevel").append("<option value='" + val.intHierarchyId + "' " + selected + ">" + val.strHierarchyName + "</option>");
                    }
                });
            }
        },
        error: function (res) {
            console.log(res);
        }
    });
}
function getSecondLevelOption(OrgId, LevelId, ParentId) {
    $(".loader-gif").show();
    $("#secondLevel option").not(':first').remove();

    $.ajax({
        type: "POST",
        url: SITE_URL + "ajax/getdemosecondleveloptions",
        dataType: "json",
        data: {OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
            var content = '';
            if (res.status == 200 && res.result.length > 0) {
                $(".loader-gif").hide();
                $(res.result).each(function (i, val) {
                    var selected = '';
                    if (caseID > 0 && secondLevel == val.intHierarchyId) {
                        selected = 'selected';
                    }
                    $("#secondLevel").append("<option value='" + val.intHierarchyId + "' " + selected + ">" + val.strHierarchyName + "</option>");
                });
            }
        },
        error: function (res) {
            console.log(res);
        }
    });
}


function addoppParty() {
    if (validateOppParty()) {
        var tabDiv = '';
        var selectedOpt = $("#intoppositeParty option:selected").text();
        var selectedId = $("#intoppositeParty").val();
        var deptId = $("#intDepartmentId").val();
        $('#tableHead').show();
        var len = $('.countTR').length + 1;
        tabDiv += '<tr id="TRod_' + selectedId + '" class="countTR">\n\
                        <td><span>' + len + '</span></td>\n\
                        <td><span>' + selectedOpt + '</span></td>\n\
                        <td><a id = "gvOpposite_imgbtnDelete_0" class = "btn btn-sm btn-danger remove"><i class = "fa fa-trash-o bigger-110"> </i></a>\n\n\
                        <input type="hidden" class="hidClass" name="selectedOppParty[]" id="selectedOppParty_'+len+'" value="' + selectedId + '">\n\
                        <input type="hidden" class="hidClass" name="selectedDept[]" id="selectedDept_'+len+'" value="' + deptId + '">\n\
                        </td>\n\
                    </tr>';
        $("#tableBody").append(tabDiv);
        $("#intoppositeParty").val(0);
    } else {

    }
}

function validateOppParty() {
    if (!selectDropdown('intoppositeParty', 'Select opposite party')) {
        return false;
    } else {
        var flag = 0;
        $(".hidClass").each(function (i) {
            if ($("#intoppositeParty").val() == this.value)
                flag++;
        });
        if (flag == 0) {
            return true;
        } else {
            viewAlert('Opposite party already exist')
            return false;
        }
    }
}

function validator() {
    if (!selectDropdown('intCaseType', 'Select case type'))
        return false;

    if (!blankCheck('vchCaseNumber', 'Case number cannot be left blank'))
        return false;

    if (!selectDropdown('vchYear', 'Year cannot be left blank'))
        return false;

    if (!selectDropdown('intCourtId', 'Select court name'))
        return false;

    if ($('#tableBody tr').length == 0) {
        viewAlert('Select opposite party')
        return false;
    }
    if ($("input[name='selRadio']:checked").val() == 0) {
        if (!blankCheck('vchPetitonerName', 'Petitoner name cannot be left blank'))
            return false;
        if (!blankCheck('vchMobileNo', 'Petitoner mobile no. cannot be left blank'))
            return false;
    }
    if (!selectDropdown('selFirstLevel', 'Select ' + $("#demoParentLabel").html()))
        return false;

    if (!selectDropdown('secondLevel', 'Select ' + $("#demoChildLabel").html()))
        return false;

    if (!selectDropdown('intSubjectMatter', 'Select subject matter'))
        return false;

    if (!blankCheck('dtmNoticeDate', 'Appearance date cannot be left blank'))
        return false;

    if (caseID == 0) {
        if (!blankCheck('vchDocument', 'Upload Plaint Copy cannot be left blank'))
            return false;
    }
    if ($('#vchDocument').val() != '')
    {
        if (!IsCheckFile('vchDocument', 'Invalid file types. Upload only ', 'pdf,doc,docx'))
            return false;
        var fileSize_inKB = Math.round(($("#vchDocument")[0].files[0].size / 1024));
        if (fileSize_inKB > 5000)
        {
            alert('Plaint Copy size cannot be more than 5MB.');
            return false;
        }
    }


}

$('#close1').click(function () {
    $('#hfFileName').val('');
    $('#imageFile1').hide();
    $(this).hide();
    // $('#imgMsg').css('margin-left', '0px'); 
    $('#vchDocument').val('');
});

function readPdf(pdfId, closeId) {
    $('#' + pdfId).show();
    $('#' + closeId).show();
}


