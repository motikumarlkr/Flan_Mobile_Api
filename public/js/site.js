/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ajaxUrl 	= SITE_URL+'ajax/';


   /* $(document).keypress(function(e) {
        if(e.which == 13) 
        {
            $('.btn-mint').click();
            return false;
        }
        $(":reset").on('click',function(){
            $(".form-control").val('').trigger("chosen:updated");

        });
        
    });
       
 */
 
 /**** function to show module details and Developed, By: T Ketaki Debadarshini on 20-Dec-2018 ****/
 function getModules(controleId,selId,parent_id,type) {
     
       
        $.ajax({
           
            url     : ajaxUrl+'getModules',
            type    : "POST",
            data    : {_token: csrftoken,parent_id:parent_id,type:type},	
            dataType: 'json',
            success : function(resp){

                if(resp.status =='ok'){
                      
                  var res           = resp.result;
                  var totalRecord   = resp.result.length;
                  var selected      = ''; //var tabDiv      = '';
                  var tabDiv        = '<option value="0">--Select--</option>';
                  if(totalRecord>0){
                         for (var i=0;i<totalRecord;i++)
                         {                            
                            if(selId==res[i].intModuleId)
                              selected='selected="selected"';
                            else
                              selected='';                          
                            
                             tabDiv+='<option data-endpoint="'+res[i].vchEndpointUrl+'" value="'+res[i].intModuleId+'" '+selected+' >';
                             tabDiv+= res[i].vchModuleName;
                             tabDiv+='</option>';
                             
                         }
                   }

                    $("#"+controleId).html(tabDiv);      
                     
                    $("#"+controleId).chosen({width: "100%"}); 
                    $("#"+controleId).trigger('chosen:updated');  
                    
                }else if(resp.status =='error'){

                    var error_type = resp.etype;


                }
            }
        });
      
 }
 
 
 /**** function to show module details and Developed, By: T Ketaki Debadarshini on 20-Dec-2018 ****/
 function getModulekeys(controleId,selId,parent_id,type) {
     
       
        $.ajax({
           
            url     : ajaxUrl+'getModules',
            type    : "POST",
            data    : {_token: csrftoken,parent_id:parent_id,type:type},	
            dataType: 'json',
            success : function(resp){

                if(resp.status =='ok'){
                      
                  var res           = resp.result;
                  var totalRecord   = resp.result.length;
                  var selected      = ''; //var tabDiv      = '';
                  var tabDiv        = '<option value="0">--Select--</option>';
                  if(totalRecord>0){
                         for (var i=0;i<totalRecord;i++)
                         {                            
                            if(selId==res[i].vchModuleKey)
                              selected='selected="selected"';
                            else
                              selected='';                          
                            
                             tabDiv+='<option value="'+res[i].vchModuleKey+'" '+selected+' >';
                             tabDiv+= res[i].vchModuleName;
                             tabDiv+='</option>';
                             
                         }
                   }

                    $("#"+controleId).html(tabDiv);      
                     
                    $("#"+controleId).chosen({width: "100%"}); 
                    $("#"+controleId).trigger('chosen:updated');  
                    
                }else if(resp.status =='error'){

                    var error_type = resp.etype;


                }
            }
        });
      
 }
 
 
 /**** function to show client details and Developed, By: T Ketaki Debadarshini on 20-Dec-2018 ****/
 function getClientList(controleId,selId) {     
       
        $.ajax({
           
            url     : ajaxUrl+'getClientlist',
            type    : "POST",
            data    : {_token: csrftoken},	
            dataType: 'json',
            success : function(resp){

                if(resp.status =='ok'){
                      
                  var res           = resp.result;
                  var totalRecord   = resp.result.length;
                  var selected      = '';
                  var tabDiv        = '<option value="0">--Select--</option>';
                  if(totalRecord>0){
                         for (var i=0;i<totalRecord;i++)
                         {                            
                            if(selId==res[i].intClientId)
                              selected='selected="selected"';
                            else
                              selected='';                          
                            
                             tabDiv+='<option value="'+res[i].intClientId+'" '+selected+' >';
                             tabDiv+= res[i].vchClientName;
                             tabDiv+='</option>';
                             
                         }
                   }

                   $("#"+controleId).html(tabDiv);      
                     
                   $("#"+controleId).chosen({width: "100%"}); 
                   $("#"+controleId).trigger('chosen:updated');  
                    
                }else if(resp.status =='error'){

                    var error_type = resp.etype;


                }
            }
        });
      
 }
 //function to regenerate keys
 function generatekey(type,intClientId,strClientName){
     
      confirmAlert('Are you sure to regenerate the key for '+strClientName+' ?');
      
       $('#btnConfirmOk').on('click', function () {

            $.ajax({

               url     : ajaxUrl+'generatekey',
               type    : "POST",
               data    : {_token: csrftoken,type:type,intClientId:intClientId,strClientName:strClientName},	
               dataType: 'json',
               success : function(resp){

                   if(resp.status =='ok'){
                       viewAlert('Key regenerated successfully', '', window.location.href);
                       // = window.location.href; 

                   }else if(resp.status =='error'){

                       var error_type = resp.etype;


                   }
               }
           });

        });
 }
 
 
 //function to get permitted methods, By : T Ketaki Debadarshini, On : 20-Dec-2018
 function getPermittedMethods(intPermissionId){     
      
    $.ajax({

       url     : ajaxUrl+'getPermittedMethods',
       type    : "POST",
       data    : {_token: csrftoken,intPermissionId:intPermissionId},	
       dataType: 'json',
       success : function(resp){

           if(resp.status =='ok'){
              
                var res           = resp.result;
                var totalRecord   = resp.result.length;
                var tabDiv        = '<ul>';
                if(totalRecord>0){
                       for (var i=0;i<totalRecord;i++)
                       {                            
                          
                           tabDiv+='<li>';
                           tabDiv+= res[i].vchModuleName;
                           tabDiv+='</li>';

                       }
                 }
                 tabDiv        += '</ul>';
                 
                 $("#dispMethodDetails").html(tabDiv);    
           }else if(resp.status =='error'){

               var error_type = resp.etype;


           }
       }
   });

 }
 
//get daily statistics
function getAPIdailystatistics(intType){
    
    var seldate = $('#search_date').val();
    $('.btnTime').removeClass('active');
    $('#btnTime'+intType).addClass('active');
    
    $("#apidailyStatistics").html('<div class="center" style="height:50px;"><i class="fa fa-spinner fa-spin"></i></div>');
    
    $.ajax({

       url     : ajaxUrl+'getAPIdailystatistics',
       type    : "POST",
       data    : {_token: csrftoken,intType:intType,seldate:seldate},	
       dataType: 'json',
       success : function(resp){
           
            if(resp.status =='ok'){
              
              var options =  { chart: {
                                  renderTo: 'apidailyStatistics',
                                  type: 'spline'
                              }, 
                              title: {
                                    text: ''
                                },
                                xAxis: {
                                    categories: []
                                },
                                yAxis: {
                                    title: {
                                        text: 'No of Request'
                                    },
                                    labels: {
                                        formatter: function () {
                                            return this.value ; 
                                        }
                                    }
                                },
                                tooltip: {
                                    crosshairs: true,
                                    shared: true
                                },
                                plotOptions: {
                                    spline: {
                                        marker: {
                                            radius: 4,
                                            lineColor: '#666666',
                                            lineWidth: 1,
                                            symbol: 'diamond'
                                        }
                                    }
                                },series: []
                          };
              
               $.each(resp.xaxisdata, function (key, value) {
                   
                    options.xAxis.categories.push(value);
                })
               $.each(resp.result, function (key, value) {
                             
                    var series_data = {name:value.name, data:[]};
                    $.each(value.data, function(itemNo, item) {

                            series_data.data.push(parseFloat(item));
                    });   

                    options.series.push(series_data);
                         
                 })

                 var chart = new Highcharts.Chart(options);
   
           }else if(resp.status =='error'){

               var error_type = resp.etype;

           }
       }
   });

}

function getLiveTrackingdata(intClientid,intModuleid,intPgno,intPgSize){
    if(intPgno == 0)
        $("#dispLiveTracking").html('<tr align="center"><td colspan="5"><i class="fa fa-spinner fa-spin"></i></td></tr>');
    
    $.ajax({

       url     : ajaxUrl+'getLiveTrackingdata',
       type    : "POST",
       data    : {_token: csrftoken,intClientid:intClientid,intModuleid:intModuleid,intPgno:intPgno,intPgSize:intPgSize},	
       dataType: 'json',
       success : function(resp){
           var tabdiv = '';
            if(resp.status =='ok'){
                
            var totalRecord = resp.result.length;
            var res         = resp.result
            var intnextRecno = parseInt(intPgno)+parseInt(intPgSize);
            var singlequote = "'"; 
            var pgno    = parseInt(intPgno);
            if(totalRecord>0){
                for (var i=0;i<totalRecord;i++)
                  {   

                        tabdiv+='<tr>';
                        tabdiv+=' <td>'+(++pgno)+'</td>';
                        tabdiv+='  <td>'+res[i].client_name+'<br>'+'<small>Requested IP:'+res[i].request_ip+'</small></td>';
                        tabdiv+='  <td>'+res[i].method_name+'('+res[i].module_name+')<br>'+'<small>Request Route:'+res[i].route+'</small></td>';
                        tabdiv+='  <td>'+res[i].response_code+'<br>'+'<small>Time:'+res[i].time_lapsed+'</small></td>';
                        tabdiv+='  <td>'+res[i].created_at+'</td>';
                        tabdiv+='</tr>'; 
                  }
                  
                   if(parseInt(intPgno) < parseInt(resp.intTotCount) && intnextRecno < parseInt(resp.intTotCount)){
                       
                      // console.log(intPgno+resp.intTotCount)
                        tabdiv+=  '<tr align="center" class="loadmore"><td colspan="5"><input type="button" onclick="getLiveTrackingdata('+singlequote+intClientid+singlequote+','+singlequote+intModuleid+singlequote+','+intnextRecno+','+intPgSize+')"  class="btn center btn-info " value="View More" ></td></tr>';
                    }             
            }else{
                tabdiv +='<tr align="center"><td colspan="5" class="noRecord">No Record Found.</td></tr>';
            }  
                           
               
               $(".loadmore").hide();
                if(intPgno == 0)
                  $("#dispLiveTracking").html(tabdiv); 
                else
                   $("#dispLiveTracking").append(tabdiv); 
               
               
                
                $("#dispLiveTracking").trigger("resize");
                $(".scrollable").mCustomScrollbar({
			theme:"minimal"
		});
               
           }else if(resp.status =='error'){

               var error_type = resp.etype;

           }
       }
   });
}

//get method statistics
function loadMethodstatistics(module_key){
    
       
    $("#dispmethodmap").html('<div class="center" style="height:50px;"><i class="fa fa-spinner fa-spin"></i></div>');
    
    $.ajax({

       url     : ajaxUrl+'loadMethodstatistics',
       type    : "POST",
       data    : {_token: csrftoken,module_key:module_key},	
       dataType: 'json',
       success : function(resp){
           
            if(resp.status =='ok'){
              
             Highcharts.chart('dispmethodmap', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Method',
                    colorByPoint: true,
                    data: resp.result
                }]
            });
   
           }else if(resp.status =='error'){

               var error_type = resp.etype;

           }
       }
   });

}



//get api method/module daily overall statistics, By : T Ketaki Debadarshini, On: 02-Jan-2018
function loadApianalytics(intType){
    
    var seldate         = $('#analytic_date').val();
    var selmodule_key   = $('#ddlAnalyticModule').val();
    var parent_key      = $("#ddlAnalyticModule option:selected").attr('data-key');
    $('.btnapitime').removeClass('active');
    $('#btnapitime'+intType).addClass('active');
    
    $("#dispAnalyticgraph").html('<div class="center" style="height:50px;"><i class="fa fa-spinner fa-spin"></i></div>');
    
    $.ajax({

       url     : ajaxUrl+'loadApianalytics',
       type    : "POST",
       data    : {_token: csrftoken,intType:intType,seldate:seldate,selmodule_key:selmodule_key,parent_key:parent_key},	
       dataType: 'json',
       success : function(resp){
           
            if(resp.status =='ok'){
              
              var options =  { chart: {
                                  renderTo: 'dispAnalyticgraph',
                                  type: 'spline'
                              }, 
                              title: {
                                    text: ''
                                },
                                xAxis: {
                                    categories: []
                                },
                                yAxis: {
                                    title: {
                                        text: 'Count'
                                    },
                                    labels: {
                                        formatter: function () {
                                            return this.value ; 
                                        }
                                    }
                                },
                                tooltip: {
                                    crosshairs: true,
                                    shared: true
                                },
                                plotOptions: {
                                    spline: {
                                        marker: {
                                            radius: 4,
                                            lineColor: '#666666',
                                            lineWidth: 1,
                                            symbol: 'diamond'
                                        }
                                    }
                                },series: []
                          };
              
               $.each(resp.xaxisdata, function (key, value) {
                   
                    options.xAxis.categories.push(value);
                })
               $.each(resp.result, function (key, value) {
                             
                    var series_data = {name:value.name, data:[]};
                    $.each(value.data, function(itemNo, item) {

                            series_data.data.push(parseFloat(item));
                    });   

                    options.series.push(series_data);
                         
                 })

                 var chart = new Highcharts.Chart(options);
   
           }else if(resp.status =='error'){

               var error_type = resp.etype;

           }
       }
   });

}

function getAPItestresult(){
    
    validator();      
    
    var endpoint    = $("#parent_id option:selected").attr('data-endpoint');
    var reqmethod   = $("input[name=request_method]:checked").val(); //$("#request_method:checked").val();
    var paramdata   = $("#json_param_data").val();
    var method_key  = $("#vchModuleKey").val();
    var method_endpoint = $("#method_endpoint").val(); 
    
    var reqbody_format  = $("input[name=request_body]:checked").val();
    
    var auth_type   = $("#auth_type").val();
    var hash        = '';
    if(auth_type==2) {
        var username = $("#auth_username").val();
        var password = $("#auth_password").val();
        var hash    =  "Basic " + btoa(username + ':' + password);
       
    }    
    //console.log(reqmethod+hash+paramdata)
    
    
    if(endpoint!='' && reqmethod!='' && method_key!='' && reqbody_format!=''){
        $("#displayLoader").show();
        $.ajax({
            url     : ajaxUrl+'getAPItestresult',
            type    : "POST",
            dataType: 'json',
            data    : {_token: csrftoken,endpoint:endpoint,reqbody_format:reqbody_format,method:reqmethod,paramdata:paramdata,hash:hash,method_key:method_key,method_endpoint:method_endpoint},	
            success : function (data){
                $("#displayLoader").hide();
                $("#testStatus").html(data.c_url)
                $('#working_status').val(2);
                
               // console.log($('#working_status').val())
                
                if(data.response_code==200)
                    $('#working_status').val(1);
                 
                if(data.result!=''){                    
                  showPreview(data.result);  
                }else{
                    $('#method_param_json').html('')
                }     
            }
        });
        
    }else{
        viewAlert('Please enter all the required fields.')
    }    
}


 function showPreview(data){
        
        //console.log(data)
        //var data            = '<?php //echo json_encode($param_info,true); ?>';
        var dataParser  = data;
        try
        {
            json        = $.parseJSON(data);
        }
        catch (e)
        {
            dataParser = ('<!DOCTYPE html>\n<html>\n' + data + '\n</html>').replace(/[<>]/g, function(m)
            {
                return {
                    '<' : '&lt;',
                    '>' : '&gt;'
                }[m]
            });
        }
       
       $('#method_param_json').jJsonViewer($.trim(dataParser));
        
    }