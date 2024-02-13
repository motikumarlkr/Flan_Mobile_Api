$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(function () {

    getDesignations('intDesignation', 0, 0, OrgID, 'S');
    getOfficer('intOfficer', 0, 0, OrgID, 'S');
    if (isAdvocateOrLaw == 1) {
        getAdvocate('intAorL', intAdvocateOrLawId, OrgID, 'S');
    } else {
        getLawFirm('intAorL', intAdvocateOrLawId, OrgID, 'S');
    }


    if (assignSatatus > 0) {
        $('#tableHead').show();
    } else {
        $('#tableHead').hide();
    }

    if ($("input[name='selAorL']:checked").val() == 1) {
        $("#txtname").html('Advocate');


    } else if ($("input[name='selAorL']:checked").val() == 2) {
        $("#txtname").html('Law Firm');

    }

    $(document).on('click', '.remove', function () {
        var btn = $(this);
        confirmAlert("Are you sure to delete the record(s) ?");
        $('#btnConfirmOk').on('click', function () {
            btn.closest('tr').remove();
        });

    });
    $("input[name='selAorL']").change(function () {
        if ($("input[name='selAorL']:checked").val() == 1) {
            $("#txtname").html('Advocate');
            getAdvocate('intAorL', 0, OrgID, 'S');

        } else if ($("input[name='selAorL']:checked").val() == 2) {
            $("#txtname").html('Law Firm');
            getLawFirm('intAorL', 0, OrgID, 'S');
        }
        $("#vchMobile").val('');
    });

    //  getPhoneNo('vchMobile', 0,$("input[name='selAorL']:checked").val(), OrgID, 'S');
});



function addOfficer() {
    if (validateOfficer()) {
        var tabDiv = '';
        var selectedOpt = $("#intOfficer option:selected").text();
        var selectedId = $("#intOfficer").val();
        $('#tableHead').show();
        var len = $('.countTR').length + 1;
        tabDiv += '<tr id="TRod_' + selectedId + '" class="countTR">\n\
                        <td><span>' + len + '</span></td>\n\
                        <td><span>' + selectedOpt + '</span></td>\n\
                        <td><a id = "gvOpposite_imgbtnDelete_0" class = "btn btn-sm btn-danger remove"><i class = "fa fa-trash-o bigger-110"> </i></a></td>\n\
                        <input type="hidden" class="hidClass" name="selectedOfficer[]" id="selectedOfficer" value="' + selectedId + '">\n\
                    </tr>';
        $("#tableBody").append(tabDiv);
        $("#intOfficer").val(0);
        $("#intDesignation").val(0);
    } else {

    }
}

function validateOfficer() {
    if (!selectDropdown('intOfficer', 'Select officer')) {
        return false;
    } else {
        var flag = 0;
        $(".hidClass").each(function (i) {
            if ($("#intOfficer").val() == this.value)
                flag++;
        });
        if (flag == 0) {
            return true;
        } else {
            viewAlert('Officer already exist')
            return false;
        }
    }
}

function validator() {
    if (!blankCheck('dtmReceivedDate', 'Case received date cannot be left blank'))
        return false;
    if ($('#tableBody tr').length == 0) {
        viewAlert('Select Officer')
        return false;
    }
    
    if (!blankChkRad('selAorL', 'Choose Advocate or Law Firm'))
        return false;
    
    if (!selectDropdown('intAorL', 'Select '+$("#txtname").text()))
        return false;


}

/**** function to get Phone Number of Advocate and Law Firm :: By : Debashri Bhakat On : 06-08-2018 ****/
function getPhoneNo(th) {
    var mobile = $(th).find(":selected").data('mobile');
    $("#vchMobile").val(mobile);
}


