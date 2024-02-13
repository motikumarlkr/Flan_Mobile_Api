@extends('layouts.portal')
@section('content')
@component('components.navigation')
@slot('glmenu')
    Consumer List
@endslot
@slot('plmenu')
    View
@endslot
@endcomponent
<?php
$utilLegend = array('indicateMe' => 'N', 'refreshMe' => 'N', 'backMe' => 'N', 'copyMe' => 'N', 'downloadMe' => 'N', 'inactiveMe' => 'N', 'disableMe' => 'N', 'enableMe' => 'N', 'unpublishMe' => 'Y', 'publishMe' => 'Y', 'archieveMe' => 'N', 'deleteMe' => 'Y', 'printMe' => 'Y', 'backMe' => 'N');
//dd($module);
?>
<div id="page-content">
    <div class="tab-base">
        {{messages()}}
        
        @if (Session::has('message'))
            <div class="alert alert-success">
                <ul style="list-style:none;padding:0;"><li><i class="fa fa-check"></i> {{ Session::get('message') }} </li></ul>
            </div>
        @endif

        @include('includes.portal.utils')


        <!-- Nav tabs -->
        <ul class="nav nav-tabs">
            <li class=""><a href="{{ url('clientlist/create') }}" >Add</a></li>
            <li class="active"><a href="javascript:void(0);" >View</a></li>
        </ul>

        <!-- Tabs Content -->
        <form id="listForm" class="form-horizontal bv-form"  method="post" novalidate>
            <div class="view-container">
                <div class="tab-content p-t-0">
                    <div class="clearfix"></div>
                    <div class="search-sec"  id="searchPanel" >
                        <div class="form-group">
                            <label class="col-sm-2 control-label no-padding-right">Consumer Name</label>
                            <div class="col-sm-3"> <span class="colon">:</span>
                                <input type="text" class="form-control" name="vchClientName" id="vchClientName"  value="{{$vchClientName}}">
                            </div>
                            <label class="col-sm-2 control-label no-padding-right">Consumer IP </label>
                            <div class="col-sm-3"> <span class="colon">:</span>
                                <input type="text" class="form-control" name="vchClientIP" id="vchClientIP" value="{{$vchClientIP}}">
                            </div>
                            
                            <div class="clearfix"></div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label no-padding-right">Api Key</label>
                            <div class="col-sm-3"> <span class="colon">:</span>
                                <input type="text" class="form-control" name="vchApiKey" id="vchApiKey" value="{{$vchApiKey}}">
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-5">
                                {{csrf_field()}}
                                
                            </div>
                            <div class="col-sm-6">
                                <input name="btnSearch" id="btnSearch" type="submit" value="Search" class="btn btn-success">
                            </div>
                             <div class="clearfix"></div>
                        </div>
                    </div>										
                    <center><a class="searchopen" title="" data-toggle="tooltip" data-original-title="Click Me" ><span>Search</span> <i class="fa fa-angle-double-down"></i> </a></center>

                        <div id="viewTable" class="table-responsive">
                            <?php if(count($arrAllRecords)>0){

                               ?> 
                            <table data-toggle="table"  class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th width="25px" class="noPrint">
                                            <input name="btSelectItem" type="checkbox" class="chkAll">
                                        </th>
                                        <th width="60px">Sl No.</th>
                                        <th>Consumer Name</th>
                                        <th>Consumer IP</th>
                                        <th >Api Key (Production)</th>
                                        <th >Api Key (Sandbox)</th>
                                        <th width="60px" class="noPrint">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <?php

                                  $i=($intPageNo-1)*$intRecsPerPage+1;

                                  foreach($arrAllRecords as $arrRecord){

                                      $strPubClass = ($arrRecord['tinPublishStatus']==1)?'active-border':'inactive-border';
                                  ?>  
                                   <tr class="<?php echo $strPubClass; ?>">
                                        <td class="noPrint"><input name="btSelectItem" type="checkbox" class="chkItem" value="<?php echo $arrRecord['intClientId']; ?>"></td>
                                        <td><?php echo $i; ?></td> 
                                        <td>{{$arrRecord['vchClientName']}} 
                                        </td>
                                        <td>{{$arrRecord['vchClientIP']}}<br>
                                            <small>{{($arrRecord['token_type']==1)?'Short Term':'Long Term'}} Token</small>
                                        </td>
                                        <td>
                                            {{$arrRecord['vchApiKey']}}
                                            
                                            <br><input type="button" value="Regenerate Key" class="noPrint btn btn-sm btn-warning" onclick="generatekey(1,'<?php echo $arrRecord['intClientId']; ?>','<?php echo $arrRecord['vchClientName']; ?>')">
                                        </td>
                                        <td>{{$arrRecord['vchSandboxApiKey']}}
                                            <br><input type="button" value="Regenerate Key" class="noPrint btn btn-sm btn-warning" onclick="generatekey(2,'<?php echo $arrRecord['intClientId']; ?>','<?php echo $arrRecord['vchClientName']; ?>')">
                                        </td>
                                        <td class="noPrint"><a class="btn btn-info btn-sm" data-toggle="tooltip" title="Edit" href="{{ url('/clientlist/edit/'.$arrRecord['intClientId']) }} "><i class="fa  fa-pencil-square-o"></i></a>                                            
                                        </td>
                                    </tr>
                                   <?php $i++; } ?>  

                                  </tbody>
                                  </table>

                                 <?php }else{?>
                                        <div class="noRecord text-center">No Record Found</div>
                                  <?php }?>
                                    <input name="hdn_PageNo" id="hdn_PageNo" type="hidden" value="">
                                    <input name="hdn_RecNo" id="hdn_RecNo" type="hidden" value="0">
                                    <input name="hdn_IsPaging" id="hdn_IsPaging" type="hidden" value="{{$isPaging}}">
                                    <input name="hdn_ids" id="hdn_ids" type="hidden">
                                    <input type="hidden" name="hdnId" id="hdnId">
                                    <input name="hdn_qs" id="hdn_qs" type="hidden">
                               </div>


                                <?php   
                                   if(count($arrAllRecords)>0){

                                       $arrPaging = ShowPaging($intRecordsCount,$intPageNo,$intRecsPerPage,$isPaging); 

                                ?>
                                  <div class="fixed-table-pagination" >
                                        <div class="page-info pull-left">
                                            <div class="dataTables_info" id="sample-table-2_info">
                                             <?php echo $arrPaging[0]; ?>
                                            </div>
                                        </div>
                                        <div class="pull-right pagination">
                                          <ul class="pagination">
                                            <?php echo $arrPaging[1]; ?>
                                           </ul>
                                        </div>
                                        <div class="clearfix"></div>
                                  </div>
                                 <?php }?>
                            </div>
                        </div>
                    </form>
                </div>
        </div>

<script>
    $(document).ready(function () {
        viewSearchPannel('<?php echo $openFlag; ?>', 'searchPanel', 'searchToggle');
       
    });
</script>
@endsection