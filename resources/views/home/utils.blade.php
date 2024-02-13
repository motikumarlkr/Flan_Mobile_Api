
<?php 

    $backUrl = URL::previous();

?>

<div class="indicatorslist pull-right">
    
   <?php if(isset($utilLegend)){?>
    <?php if(strtolower($utilLegend['indicateMe'])=='y'){?>
    <span style="color: #ffff;">(</span><span class="text-danger" id="indicate">*</span><span style="color: #ffff;">)Indicate mandatory </span>
          <?php }?>
        <?php if(strtolower($utilLegend['copyMe'])=='y'){?>

             <a href="javascript:void(0)" title="Copy Table" id="activeIcon" data-toggle="tooltip" data-placement="top"  class="btn btn-primary btn-icon"  data-clipboard-demo="" data-clipboard-action="copy" data-clipboard-target="#viewTable"><i class="fa fa-clone"></i></a>

         <?php }?> 

        <?php if(strtolower($utilLegend['printMe'])=='y'){?> 
             <a href="javascript:PrintPage();void(0)" class="btn btn-primary btn-icon" title="Print" id="printIcon" data-toggle="tooltip" data-placement="top"><i class="demo-pli-printer"></i></a>
          <?php }?> 

      <?php if(strtolower($utilLegend['deleteMe'])=='y'){?>
             <a class="btn btn-primary btn-icon" onclick="gotoDelete('D');"  id="deleteIcon"  data-toggle="tooltip" data-placement="top" title="Delete"><i class="demo-pli-trash"></i></a>
          <?php }?> 

          <?php if(strtolower($utilLegend['downloadMe'])=='y'){?>
             <a class="btn btn-primary btn-icon" title="Excel" id="excelIcon" data-toggle="tooltip" data-placement="top"><i class="demo-pli-file-excel"></i></a>
          <?php }?> 

          <?php if(strtolower($utilLegend['refreshMe'])=='y'){?>
             <a class="btn btn-primary btn-icon" title="Refresh" id="refreshIcon" data-toggle="tooltip" data-placement="top"><i class="demo-pli-repeat-2"></i></a>
          <?php }?> 

         <?php if(strtolower($utilLegend['publishMe'])=='y'){?>
             <a class="btn btn-primary btn-icon"  onclick="gotoDelete('P');"  title="Publish" id="publishIcon" data-toggle="tooltip" data-placement="top"><i class="demo-pli-check"></i></a>
          <?php }?> 

        <?php if(strtolower($utilLegend['unpublishMe'])=='y'){?>
             <a class="btn btn-primary btn-icon" onclick="gotoDelete('UN');" title="Unpublish" id="unpublishIcon" data-toggle="tooltip" data-placement="top"><i class="fa fa-eye-slash"></i></a>
          <?php }?> 

          <?php if(strtolower($utilLegend['backMe'])=='y'){?>
             <a class="btn btn-primary btn-icon" onclick="goBack();"  title="Back" id="backIcon" data-toggle="tooltip" data-placement="top"><i class="demo-pli-back"></i></a>
          <?php }?> 

          <?php if(strtolower($utilLegend['downloadMe'])=='y'){?>
             <a class="btn btn-primary btn-icon" onclick="downloadExcel();" title="Download" id="downloadIcon" data-toggle="tooltip" data-placement="top"><i class="demo-pli-download-from-cloud"></i></a>
          <?php }?> 

     <?php }?>     
</div>		
                
<script>
////=========Util Icons=========//	


 
 function goBack()
	{
		var path= '<?php echo (isset($utilLegend['backPath']))?$utilLegend['backPath']:'';?>';
		if(typeof(path)=='undefined' || path=='')
		{
			var referrer =  document.referrer;
			window.location.href = referrer;
		}
		else	
		{	
			window.location.href=appURL+path;
		}
		
	}

</script>