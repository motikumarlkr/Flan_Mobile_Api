


       <div id="page-head">
                         <!--Button tabs-->
            <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
            <ul class="button-tabs pull-right">
                <li class="<?php if(CURRENT_PATH == url('/').'/console/linkupcontempt'){echo 'active';}?>"><a href="linkupcontempt">Contempt</a></li>	
                <li class="<?php if(CURRENT_PATH == url('/').'/console/linkupappeal'){echo 'active';}?>"><a href="linkupappeal">Appeal</a></li>	
                
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