<style>
    .modal-content-border{border: 5px solid #f4c741;}
</style>
<div class="modal fade in" id="alertModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" >
    <div class="modal-dialog ">
        <div class="modal-content text-center modal-content-border">
            <div class="modal-body no-padding">
                <h4 class="alertMessage">
                    @isset($slot)
                    {{$slot}}
                    @endisset
                </h4>
            </div>
            <div class="modal-footer text-center">
                <a data-bb-handler="cancel" class="btn btn-danger " id="btnAlertOk">OK</a>
            </div>
        </div>
    </div>
</div>



<div class="bootbox modal bootbox-confirm in" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" >
    <div class="modal-dialog">
        <div class="modal-content text-center modal-content-border">
            <div class="modal-body no-padding">
                <h2 class="confirmMessage center"></h2>
                <div class="form-group">
                    <div class="center"> 
                        <a class=" btn btn-primary btn-sm" id="btnConfirmOk" data-dismiss="modal" style="width:100px; margin-top:30px;">Yes</a> 
                        <a class=" btn btn-danger btn-sm" id="btnConfirmCancel" data-dismiss="modal" style="width:100px; margin-top:30px;">No</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="bootbox modal bootbox-confirm in" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" >
    <div class="modal-dialog animated zoomInDown">
        <div class="modal-content text-center">
            <div class="modal-body no-padding">
                <h2 class="confirmMessage center"></h2>
                <div class="form-group">
                    <div class="center"> <a href="javascript:void(0);"class=" btn btn-primary btn-sm" id="btnUpdateConfirmOk" data-dismiss="modal" style="width:100px; margin-top:30px;">Yes</a> <a class=" btn btn-danger btn-sm" id="btnConfirmCancel" data-dismiss="modal" style="width:100px; margin-top:30px;">No</a> </div>
                </div>
            </div>
        </div>
    </div>
</div>