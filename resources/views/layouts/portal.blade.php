@include('home.head')
<?php 
 
    $url = url('/');
?>   
  <script>
      
        $(document).ready(function () {	
           
            
            $('form').find('input[type=text],textarea').attr('autocomplete', 'off');
			
            /* Left menu active */
            var glink	= getCookie('adminGLink');
            var plink	= getCookie('adminPLink');
            //alert(glink+'=='+plink);
            $('.nav-first-level').find('li').removeClass('active-sub');
            $('.nav-first-level').find('ul').removeClass('in');
            $('.nav-second-level').find('li').removeClass('active');
            $('.nav-first-level').find('a').attr('aria-expanded','false');
            
            $('#mainnav-menu>li').each(function(){
                    var dataGl = $(this).data('gl');
                    if(Number(dataGl) == Number(glink))
                    {
                            $(this).addClass('active-sub');
                            $(this).find('.nav-second-level').addClass('in');
                            $(this).find('.nav-second-level>li').each(function(){
                                    var dataPl = $(this).data('pl');
                                    var actualPl	= dataPl;
                                    var actualLink	= glink+'_'+plink;
                                    if(actualPl==actualLink)
                                    {
                                            $(this).addClass('active');
                                    }
                                    else
                                    {
                                            $(this).removeClass('active');
                                    }
                            });
                    }
                    else
                    {
                            $(this).removeClass('active');
                            $(this).find('.nav-second-level').removeClass('in');
                    }
            });
			
        });
		

        
    </script>     
<!--TIPS-->
<!--You may remove all ID or Class names which contain "demo-", they are only used for demonstration. -->
<body >
    <div >
       

     

        <!--NAVBAR-->
        <!--===================================================-->
        @include('home.header')
        <!--===================================================-->
        <!--END NAVBAR-->

        <div >

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
               
    
                <!--Page content-->
                <!--===================================================-->
                @yield('content')
                <!--===================================================-->
                <!--End page content-->
            </div>
            <!--MAIN NAVIGATION-->
            <!--===================================================-->
            
            <!--===================================================-->
            <!--END MAIN NAVIGATION-->
        </div>
        <!-- FOOTER -->
        <!--===================================================-->
        @include('home.footer')
        
        <!--===================================================-->
        <!-- END FOOTER -->
        <!-- PAGE SCRIPT -->
        @yield('script')
        <!-- END PAGE SCRIPT -->

        <!-- SCROLL PAGE BUTTON -->
        <!--===================================================-->
        <button class="scroll-top btn" style="animation: jellyIn 0.8s;">
            <i class="pci-chevron chevron-up"></i>
        </button>
        <!--===================================================-->



    </div>
    <!--===================================================-->
    <!-- END OF CONTAINER -->





</body>

</html>

