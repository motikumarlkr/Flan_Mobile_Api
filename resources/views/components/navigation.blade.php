
<?php

function returActive($addlink, $viewlink) {
    if ((CURRENT_PATH == url('/') . $addlink) ||
            (CURRENT_PATH == url('/') . $viewlink )) {
        echo 'active';
    }
}
?>
<div id="page-head">
    <!--Button tabs-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <?php if (Request::segment(2) == 'master') { ?>
        <ul class="button-tabs pull-right">

            <li class="<?php returActive('/application/master/add', '/application/master'); ?>"><a href="{{ url('application/master') }}">Court Type</a></li>	
            <li class="<?php returActive('/application/master/addCourt', '/application/master/court'); ?>"><a href="{{ url('application/master/court') }}">Court</a></li>	
            <li class="<?php returActive('/application/master/addCaseType', '/application/master/caseType') ?>"><a href="{{ url('application/master/caseType') }}">Case Type</a></li>
            <li class="<?php returActive('/application/master/addOppositeParty', '/application/master/oppositeParty'); ?>"><a href="{{ url('application/master/oppositeParty') }}">Opposite Party</a></li>
            <li class="<?php returActive('/application/master/addAdvocate', '/application/master/advocate'); ?>"><a href="{{ url('application/master/advocate') }}"> Advocate</a></li>
            <li class="<?php returActive('/application/master/addLawFirm', '/application/master/lawFirm'); ?>"><a href="{{ url('application/master/lawFirm') }}">Law Firms</a></li>
            <li class="<?php returActive('/application/master/addSubjectMatter', '/application/master/subjectMatter'); ?>"><a href="{{ url('application/master/subjectMatter') }}"> Subject Matter</a></li>               
            <li class="<?php returActive('/application/master/addCaseStatus', '/application/master/caseStatus'); ?>"><a href="{{ url('application/master/caseStatus') }}"> Case Status</a></li>               
            <li class="<?php returActive('/application/master/addContemptType', '/application/master/contemptType'); ?>"><a href="{{ url('application/master/contemptType') }}"> Contempt Type</a></li>               
        </ul>
    <?php } ?>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--Button tabs-->

    <!--Breadcrumb-->
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <ul class="nav navbar-top-links pull-left">                     
        <li class="tgl-menu-btn">
            <a class="mainnav-toggle"  href="javascript:void(0);">
                <i class="demo-pli-list-view"></i>
            </a>
        </li>                      
    </ul>                    
    <ol class="breadcrumb">
        <li><a href="<?php echo url('/').'/dashboard';?>"><i class="demo-pli-home"></i></a></li>                
        <li>{{ $glmenu }}</li>                
        @isset($plmenu)
        <li>{{ $plmenu }}</li>
        @endisset
        @isset($pgmenu)
        <li>{{ $pgmenu }}</li>
        @endisset
        @isset($lamenu)
        <li>{{ $lamenu }}</li>
        @endisset

    </ol>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--End breadcrumb-->
</div>