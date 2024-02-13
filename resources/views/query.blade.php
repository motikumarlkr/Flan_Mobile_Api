@extends( 'layouts.portal' )

	<!-- Header -->
 @section( 'content' )

@component('components.navigation')
          @slot('glmenu')
             Query
        @endslot		
		 
         @slot('plmenu')
           
         @endslot    
    
  @endcomponent
 

  <div id="page-content">
            
            
    <div class="tab-base">
               
					
        <!-- Tabs Content -->
                    <form  class="form-horizontal bv-form" novalidate method="post" autocomplete="off" name="frmCustomCard" id="frmCustomCard" >
                        
                        <div class="tab-content">
                            <div class="tab-pane pad-btm fade active in" id="demo-bsc-tab-1">

                               <div class="">
                                   
                                    @if (Session::has('message'))
                                       <div class="alert alert-success">                        
                                          <i class="fa fa-check"></i> {{ Session::get('message') }} 
                                       </div>
                                    @endif


                                       {{csrf_field()}}

                                       <div class="tab-content">
                                           <div class="tab-pane pad-btm fade active in" id="demo-bsc-tab-1">

                                                
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <div class="form-group"> 
                                                                 <label class="col-sm-9 control-label no-padding-right" for="dqs">Query</label>
                                                                 <label class="col-sm-3 control-label no-padding-right">DB :: <?php echo $DB_NAME;?></label>
                                                                 <div class="col-sm-9">
                                                                     <textarea id="dqs" name="dqs" rows="10" class="form-control amhfld"><?php echo $query; ?></textarea>
                                                                 </div>
                                                                                 
                                                                 
                                                                 
                                                                <div class="col-sm-3" style="height:200px; overflow:auto; border:#ccc solid 1px;">				 	
                                                                       <?php 
                                                                       if($resElements){

                                                                             foreach ($resElements as $elementRow) {

                                                                       ?>

                                                                       <div class="link">
                                                                       <?php if($elementRow->ROUTINE_TYPE == 'TABLE'){?>
                                                                       <i class="fa fa-table"></i>
                                                                       <?php }else if($elementRow->ROUTINE_TYPE == 'VIEW'){?>
                                                                       <i class="fa fa-caret-square-o-down"></i>
                                                                       <?php }else if($elementRow->ROUTINE_TYPE == 'FUNCTION'){?>
                                                                       <i class="fa fa-tag"></i>
                                                                       <?php }else if($elementRow->ROUTINE_TYPE == 'PROCEDURE'){?>
                                                                       <i class="fa fa-tasks"></i>
                                                                       <?php }?>
                                                                       <a class="clsTblName" data-rel="tooltip" data-original-title="<?php echo $elementRow->ROUTINE_TYPE;?>" href="javascript:void(0);" data-type="<?php echo $elementRow->ROUTINE_TYPE;?>" data-val="<?php echo $elementRow->TABLE_NAME;?>"><?php echo $elementRow->TABLE_NAME;?></a></div>
                                                                       <?php }}?>
                                                                </div>
                                                                 
                                                                 
                                                                 
                                                                 
                                                             </div>
                                                            <div class="form-group">
                                                              <div class="col-sm-1">
                                                               <input class="btn btn-success" name="btnExecute" type="button" value="Execute" onclick=" validate();"/>
                                                             </div>
                                                             </div>
                                                            
                                                        <?php  ?>    
                                                            <h4>Result : </h4>
                                                            <div id="viewTable" class="scrollable-horizontal" style="min-height:300px; border:1px solid #ccc;"  data-size="1500">
                                                                <?php 
                                                                
                                                               // dd($result);
                                                                if($result) {
                                                                    
                                                                       
                                                                    ?>  
                                                           <table class="table  table-bordered table-hover table-responsive" id="resultTbl">
                                                             <thead>
                                                                 <tr>
                                                                     <th width="20">Sl.#</th>
                                                                    <?php 
                                                                    
                                                                        foreach ($result[0] as $fieldkey=>$fieldval) {
                                                                        ?>
                                                                     <th><?php echo $fieldkey; ?> </th>  
                                                                    <?php } ?>
                                                                 </tr>
                                                             </thead>
                                                             <tbody>
                                                                    <?php 
                                                                   
                                                                    $ctrl = 1;
                                                                  
                                                                    foreach ($result as $value) { 
                                                                        
                                                                       $data = (array)$value;
                                                                     
                                                                        ?>
                                                                 <tr>
                                                                     <td><?php echo $ctrl; ?></td>
                                                                     <?php foreach ($data as $key=>$val) { ?>
                                                                    <td><?php echo $val; ?> </td>  
                                                                   <?php } ?>
                                                                 </tr>
                                                                 <?php $ctrl ++; }  ?>
                                                             </tbody>
                                                           </table>
                                                                <?php } else { 
                                                                    if($result==1)
                                                                    {
                                                                        echo "Query Executed Successfully";
                                                                    }else {
                                                                    ?>

                                                                <?php print_r ($result); ?>
                                                                <?php }
                                                                
                                                                    } ?>
                                                            </div>
                                                            
                                                        <?php  ?>    
                                                            
                                                            
                                                            
                                                        </div>



                                                     </div>
                                               
                                           </div>
                                        </div>

                                </div>

				              
                        </div>


                    </div>
                </form>
            </div>
</div>	

<link rel="stylesheet" type="text/css" href="{{ asset('css/jquery.dataTables.min.css')}}">
<script src="{{ asset('js/jquery.dataTables.min.js')}}"></script>

<script>
    
    
    $(document).ready(function () {

        $('#resultTbl').DataTable({
            "sPaginationType": "full_numbers",
            "bJQueryUI": true,
             "scrollX": true,
            "iDisplayLength":20,
            "aLengthMenu": [[20,50, 100, 500, 1000, -1], [20,50, 100, 500, 1000, "All"]]
        });


        $('.clsTblName').dblclick(function(){
                var tableName		= $(this).data('val');
                var tableType		= $(this).data('type');
                var tableDefinition	= $(this).data('definition');
                if(tableType == 'TABLE' || tableType == 'VIEW')
                {
                        $('#dqs').val('SELECT * FROM '+tableName+';');
                }
                else if(tableType == 'PROCEDURE')
                {
                        $('#dqs').val('SHOW CREATE PROCEDURE '+tableName+';');
                }
                else if(tableType == 'FUNCTION')
                {
                        $('#dqs').val('SHOW CREATE FUNCTION '+tableName+';');
                }
        }); 
         
         
         $('#confirmDeleteBox').on('show.bs.modal', function (e) {
            var message = $(e.relatedTarget).attr('data-message');
            $(this).find('.modal-body p').text(message);
            var title = $(e.relatedTarget).attr('data-title');
            $(this).find('.modal-title').html(title);
            
            
           // var cardid = $(e.relatedTarget).attr('data-cardid');
            $('#hdn_ids').val($(e.relatedTarget).attr('data-cardid'));
            $('#hdn_qs').val('D');

        });

      
        $('#confirmDeleteBox').find('.modal-footer #confirmCard').on('click', function(){           
            $('#frmCustomCard').submit();
             
        });
       
    });
        
       function validate()
	{		
		var qry	= $('#dqs').val();
		qry		= qry.toLowerCase();
		var err	= 0;
		if(qry.indexOf("drop") >= 0)
		{
			err++;
			confirmAlert('Query contains "DROP" keyword! Would you like to continue?');
		}
		else if(qry.indexOf("update") >= 0)
		{
			err++;
			confirmAlert('Query contains "UPDATE" keyword! Would you like to continue?');
		}
		else if(qry.indexOf("truncate") >= 0)
		{
			err++;
			confirmAlert('Query contains "TRUNCATE" keyword! Would you like to continue?');
		}
                
		$('#btnConfirmOk').on('click',function(){						
			$("form").submit();
		});
		if(err == 0)
		{
			$("form").submit();
		}
	} 
       
        
</script>

<div class="modal fade" id="confirmModal" role="dialog" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title confirmMessage">Delete Permanently</h4>
      </div>
      <div class="modal-body ">
        <p>Are you sure about this ?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger" id="btnConfirmOk">OK</button>
      </div>
    </div>
  </div>
</div>

@endsection
