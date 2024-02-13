


       <div id="page-head">
                         <!--Button tabs-->
            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
            <ul class="button-tabs pull-right">
                <li  class="<?php if(CURRENT_PATH == url('/').'/console/addnewcase'){echo 'active';}?>"><a href="addnewcase">add new case</a></li>	
                <li class="<?php if(CURRENT_PATH == url('/').'/console/viewpending'){echo 'active';}?>"><a href="viewpending">View Cases</a></li>	
                
            </ul>
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
                <li><a href="dashboard"><i class="demo-pli-home"></i></a></li>
                
                <li><a href="javascript:void(0);">  {{ $glmenu }}</a></li>
                
                  @isset($plmenu)
                <li class="active">{{ $plmenu }}</li>
                 @endisset
            </ol>
            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
            <!--End breadcrumb-->


        </div>