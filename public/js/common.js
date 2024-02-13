function getdemoParentLabel(ctrlId, OrgId, LevelId, ParentId)
{
    $.ajax({
        type: "POST",
        url: SITE_URL + 'ajax/getdemoparentlabel',
        dataType: "json",
        data: {method: 'getdemoparentlabel', OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
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
    $.ajax({
        type: "POST",
        url: SITE_URL + "ajax/getdemochildlabel",
        dataType: "json",
        data: {method: 'getdemochildlabel', OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
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
    $("#selFirstLevel option").not(':first').remove();
    $.ajax({
        type: "POST",
        url: SITE_URL + "ajax/getdemofirstleveloptions",
        dataType: "json",
        data: {OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
            if (res.status == 200 && res.result.length > 0) {
                $(res.result).each(function (i, val) {
                    var selected = '';
                    if (parentId == val.intHierarchyId)
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
    $("#secondLevel option").not(':first').remove();

    $.ajax({
        type: "POST",
        url: SITE_URL + "ajax/getdemosecondleveloptions",
        dataType: "json",
        data: {OrgId: OrgId, LevelId: LevelId, ParentId: ParentId},
        success: function (res) {
            var content = '';
            if (res.status == 200 && res.result.length > 0) {
                $(res.result).each(function (i, val) {
                    var selected = '';
                    if (secondLevel == val.intHierarchyId) {
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