<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Media Indonesia | Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
    <meta content="Coderthemes" name="author" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="/assets/images/favicon.ico">

    <!-- Plugins css -->
    <link href="/assets/libs/quill/quill.core.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/quill/quill.bubble.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/quill/quill.snow.css" rel="stylesheet" type="text/css" />

    <!-- select2 -->
    <link href="/assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
    <!-- Plugins css -->
    <link href="/assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/libs/flatpickr/flatpickr.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/clockpicker/bootstrap-clockpicker.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
    <!-- Plugins css -->
    <link href="/assets/libs/dropzone/dropzone.min.css" type="text/css" rel="stylesheet" />
    <script src="/assets/libs/dropzone/dropzone.js"></script>

    <link href="/assets/libs/dropify/css/dropify.min.css" rel="stylesheet" type="text/css" />
    <!-- App css -->
    <link href="/assets/css/app.min.css" rel="stylesheet" type="text/css" id="app-style" />

    <!-- icons -->
    <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/libs/datatables.net-select-bs5/css//select.bootstrap5.min.css" rel="stylesheet" type="text/css" />
    <style>
        .ui-autocomplete {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 0;
            margin: 0;
            height: auto;
            max-height: 200px;
            overflow-x: hidden;
        }

        .ui-autocomplete li {
            padding: 5px;
        }

        .ui-autocomplete li:hover {
            background-color: #eee;
        }

        .dropzone .dz-preview .dz-image img {
            width: 100%;
            height: 100%;
            object-fit: fill;
            object-position: center;
        }

        #loading {
            background: url('/assets/images/loadingbi.gif') no-repeat center center;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 9999999;
            background-size: 10%;
        }
    </style>
    </head>

<!-- body start -->

<body class="loading" data-layout-color="light" data-layout-mode="default" data-layout-size="fluid" data-topbar-color="light" data-leftbar-position="fixed" data-leftbar-color="light" data-leftbar-size='default' data-sidebar-user='true'>

    <!-- Begin page -->
    <div id="wrapper">
        <!-- Topbar Start -->
<div class="navbar-custom">
    <ul class="list-unstyled topnav-menu float-end mb-0">

        <li class="d-none d-lg-block">
            <form class="app-search d-none" action="https://cmsdev.mediaindonesia.com/admin/search" method="post">
                <div class="app-search-box">
                    <div class="input-group">
                        <input type="hidden" name="csrf_test_name" value="5a437db0db0dee7b4e0bdf6ae1b3f710">                        <button class="btn input-group-text" type="submit">
                            <i class="fe-search"></i>
                        </button>
                    </div>
                    <!-- <div class="dropdown-menu dropdown-lg" id="search-dropdown">
                        <div class="dropdown-header noti-title">
                            <h5 class="text-overflow mb-2">Found 22 results</h5>
                        </div>

                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-home me-1"></i>
                            <span>Analytics Report</span>
                        </a>

                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-aperture me-1"></i>
                            <span>How can I help you?</span>
                        </a>
            
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-settings me-1"></i>
                            <span>User profile settings</span>
                        </a>

                        <div class="dropdown-header noti-title">
                            <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
                        </div>

                        <div class="notification-list">
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <div class="d-flex align-items-start">
                                    <img class="d-flex me-2 rounded-circle" src="/assets/images/users/user-2.jpg" alt="Generic placeholder image" height="32">
                                    <div class="w-100">
                                        <h5 class="m-0 font-14">Erwin E. Brown</h5>
                                        <span class="font-12 mb-0">UI Designer</span>
                                    </div>
                                </div>
                            </a>

                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <div class="d-flex align-items-start">
                                    <img class="d-flex me-2 rounded-circle" src="/assets/images/users/user-5.jpg" alt="Generic placeholder image" height="32">
                                    <div class="w-100">
                                        <h5 class="m-0 font-14">Jacob Deo</h5>
                                        <span class="font-12 mb-0">Developer</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>  -->
                </div>
            </form>
        </li>

        <li class="dropdown d-inline-block d-lg-none">
            <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i class="fe-search noti-icon"></i>
            </a>
            <div class="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                <form class="p-3">
                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                </form>
            </div>
        </li>

        <li class="dropdown notification-list topbar-dropdown">

        </li>
                    <li class="dropdown notification-list topbar-dropdown">
                <a class="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="/assets/images/users/user-1.jpg" alt="user-image" class="rounded-circle">
                    <span class="pro-user-name ms-1">
                        Adminnew <i class="mdi mdi-chevron-down"></i>
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>

                    <a href="https://cmsdev.mediaindonesia.com/admin/users/1" class="dropdown-item notify-item">
                        <i class="fe-user"></i>
                        <span>My Account</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <a href="https://cmsdev.mediaindonesia.com/logout" class="dropdown-item notify-item">
                        <i class="fe-log-out"></i>
                        <span>Sign out</span>
                    </a>

                </div>
            </li>
            </ul>

    <!-- LOGO -->
    <div class="logo-box">
        <a href="https://cmsdev.mediaindonesia.com/admin" class="logo logo-light text-center">
            <span class="logo-sm">
                <img src="/assets/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="/assets/images/logo-light.png" alt="">
            </span>
        </a>
        <a href="https://cmsdev.mediaindonesia.com/admin" class="logo logo-dark text-center">
            <span class="logo-sm">
                <img src="/assets/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="/assets/images/logo-dark.png" alt="">
            </span>
        </a>
    </div>

    <ul class="list-unstyled topnav-menu topnav-menu-left mb-0">
        <li>
            <button class="button-menu-mobile disable-btn waves-effect">
                <i class="fe-menu"></i>
            </button>
        </li>

    </ul>

    <div class="clearfix"></div>

</div>
<!-- end Topbar -->        <div class="left-side-menu">

    <div class="h-100" data-simplebar>

            <!-- User box -->
        <div class="user-box text-center">

            <img src="/assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" class="rounded-circle img-thumbnail avatar-md">
                <div class="dropdown">
                    <a href="#" class="user-name dropdown-toggle h5 mt-2 mb-1 d-block" data-bs-toggle="dropdown"  aria-expanded="false">Adminnew</a>
                    <div class="dropdown-menu user-pro-dropdown">

                        <!-- item-->
                        <a href="https://cmsdev.mediaindonesia.com/admin/users/1" class="dropdown-item notify-item">
                            <i class="fe-user me-1"></i>
                            <span>My Account</span>
                        </a>

                        <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-settings me-1"></i>
                            <span>Settings</span>
                        </a>

                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="fe-lock me-1"></i>
                            <span>Lock Screen</span>
                        </a> -->

                        <!-- item-->
                        <a href="https://cmsdev.mediaindonesia.com/logout" class="dropdown-item notify-item">
                            <i class="fe-log-out me-1"></i>
                            <span>Sign out</span>
                        </a>

                    </div>
                </div>

            <!-- <p class="text-muted left-user-info">Admin Head</p> -->

            <!-- <ul class="list-inline">
                <li class="list-inline-item">
                    <a href="#" class="text-muted left-user-info">
                        <i class="mdi mdi-cog"></i>
                    </a>
                </li>

                <li class="list-inline-item">
                    <a href="#">
                        <i class="mdi mdi-power"></i>
                    </a>
                </li>
            </ul> -->
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">

            <ul id="side-menu">

                <li class="menu-title">Navigation</li>
    
                <li>
                    <a href="https://cmsdev.mediaindonesia.com/admin" title="Dashboard"  class="active">
                        <i class="mdi mdi-view-dashboard-outline"></i>
                        <!-- <span class="badge bg-success rounded-pill float-end">9+</span> -->
                        <span> Dashboard </span>
                    </a>
                </a>
                </li>

                
                            
                                                            <li>
                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/compartment-list">
                                                                                                                    <i class="fas fa-user"></i>                                                                                                                <span>Compartments</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/log-list">
                                                                                                                    <i class="fas fa-history"></i>                                                                                                                <span>Log Change</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/tts-list">
                                                                                                                    <i class="fas fa-user"></i>                                                                                                                <span>TTS Edition</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/users">
                                                                                                                    <i class="fas fa-users"></i>                                                                                                                <span>Users</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/toptags-list">
                                                                                                                    <i class="fas fa-user"></i>                                                                                                                <span>Top Tags</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/video-list">
                                                                                                                    <i class="fas fa-video"></i>                                                                                                                <span>Video</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/gallery-list">
                                                                                                                    <i class="fas fa-image"></i>                                                                                                                <span>Gallery</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/lima-list">
                                                                                                                    <i class="fas fa-image"></i>                                                                                                                <span>Lima</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/podium">
                                                                                                                    <i class="fas fa-medal"></i>                                                                                                                <span>Podium</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/pages-list">
                                                                                                                    <i class="fas fa-bookmark"></i>                                                                                                                <span>Pages</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/editorials/list">
                                                                                                                    <i class="fas fa-newspaper"></i>                                                                                                                <span>Editorial</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/news-list">
                                                                                                                    <i class="fas fa-newspaper"></i>                                                                                                                <span>News</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                                                            </li>
                                                                                <li>
                                                            <a href="#Settings" data-bs-toggle="collapse">
                                    <i class="fas fa-cog"></i>                                    <span> Settings </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="Settings">
                                    <ul class="nav-second-level">
                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/author-list">
                                                                                                                <span>Author</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                                                                                                    <li class="">
                                                    <a class="" href="/admin/settings/email">
                                                                                                                <span>Email</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/settings/general">
                                                                                                                <span>General</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/pengumuman">
                                                                                                                <span>Pengumuman</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/tts-bank-list">
                                                                                                                <span>TTS Bank</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/tts-group-list">
                                                                                                                <span>TTS Group</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                                                                                                    <li class="">
                                                    <a class="" href="/admin/text">
                                                                                                                <span>Text</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                                                                                                    <li class="">
                                                    <a class="" href="/admin/group-list">
                                                                                                                <span>User Groups</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/settings/users">
                                                                                                                <span>Users</span>
                                                    </a>
                                                </li>
                                                                                                                                                                                <li class="">
                                                    <a class="" href="/admin/settings/widgets">
                                                                                                                <span>Widgets</span>
                                                    </a>
                                                </li>
                                                                                                                                                    </ul>
                                </div>
                                                    </li>
                                                                                <li>
                                                            <a href="#Tools" data-bs-toggle="collapse">
                                    <i class="fas fa-toolbox"></i>                                    <span> Tools </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <div class="collapse" id="Tools">
                                    <ul class="nav-second-level">
                                                                                                                                                                                                                                                                                                                                        <li class="">
                                                    <a class="" href="/admin/tools/system-info">
                                                                                                                <span>System Info</span>
                                                    </a>
                                                </li>
                                                                                                                                                    </ul>
                                </div>
                                                    </li>
                                                                                                                                                                                                                                                                                                                                                                                    
                
            </ul>

        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->

</div>


        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="content-page">
            <div class="content">

                <!-- Start Content-->
                <div class="container-fluid mt-3">


                    
	<div class='row'><div class="col-xl-3 col-md-6">
    <div class="card">
        <div class="card-body">

            <h4 class="header-title mt-0 mb-4">Berita Hari Ini</h4>

            <div class="widget-chart-1">
                <div class="widget-chart-box-1 float-start" dir="ltr">
                    <input data-plugin="knob" data-width="70" data-height="70" data-fgColor="#f05050 "
                            data-bgColor="#F9B9B9" value="0"
                            data-skin="tron" data-angleOffset="400" data-readOnly=true
                            data-thickness=".15"/>
                </div>

                <div class="widget-detail-1 text-end">
                    <h2 class="fw-normal pt-2 mb-1"> 0 </h2>
                    <p class="text-muted mb-1">Jumlah</p>
                </div>
                <div class="progress progress-bar-alt-danger progress-sm">
                    <div class="progress-bar bg-danger" role="progressbar"
                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                            style="width: 0%;">
                        <span class="visually-hidden">0% Complete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div class="col-xl-3 col-md-6">
    <div class="card">
        <div class="card-body">

            <h4 class="header-title mt-0 mb-4">Berita Kemarin</h4>

            <div class="widget-chart-1">
                <div class="widget-chart-box-1 float-start" dir="ltr">
                    <input data-plugin="knob" data-width="70" data-height="70" data-fgColor="#f05050 "
                            data-bgColor="#F9B9B9" value="0"
                            data-skin="tron" data-angleOffset="400" data-readOnly=true
                            data-thickness=".15"/>
                </div>

                <div class="widget-detail-1 text-end">
                    <h2 class="fw-normal pt-2 mb-1"> 0 </h2>
                    <p class="text-muted mb-1">Jumlah</p>
                </div>
                <div class="progress progress-bar-alt-danger progress-sm">
                    <div class="progress-bar bg-danger" role="progressbar"
                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                            style="width: 0%;">
                        <span class="visually-hidden">0% Complete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div class="col-xl-3 col-md-6">
    <div class="card">
        <div class="card-body">

            <h4 class="header-title mt-0 mb-4">Berita Bulan ini</h4>

            <div class="widget-chart-1">
                <div class="widget-chart-box-1 float-start" dir="ltr">
                    <input data-plugin="knob" data-width="70" data-height="70" data-fgColor="#f05050 "
                            data-bgColor="#F9B9B9" value="0"
                            data-skin="tron" data-angleOffset="400" data-readOnly=true
                            data-thickness=".15"/>
                </div>

                <div class="widget-detail-1 text-end">
                    <h2 class="fw-normal pt-2 mb-1"> 0 </h2>
                    <p class="text-muted mb-1">Jumlah</p>
                </div>
                <div class="progress progress-bar-alt-danger progress-sm">
                    <div class="progress-bar bg-danger" role="progressbar"
                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                            style="width: 0%;">
                        <span class="visually-hidden">0% Complete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div class="col-xl-3 col-md-6">
    <div class="card">
        <div class="card-body">

            <h4 class="header-title mt-0 mb-4">Berita Bulan kemarin</h4>

            <div class="widget-chart-1">
                <div class="widget-chart-box-1 float-start" dir="ltr">
                    <input data-plugin="knob" data-width="70" data-height="70" data-fgColor="#f05050 "
                            data-bgColor="#F9B9B9" value="0"
                            data-skin="tron" data-angleOffset="400" data-readOnly=true
                            data-thickness=".15"/>
                </div>

                <div class="widget-detail-1 text-end">
                    <h2 class="fw-normal pt-2 mb-1"> 0 </h2>
                    <p class="text-muted mb-1">Jumlah</p>
                </div>
                <div class="progress progress-bar-alt-danger progress-sm">
                    <div class="progress-bar bg-danger" role="progressbar"
                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                            style="width: 0%;">
                        <span class="visually-hidden">0% Complete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></div><div class='row'><div class="col-xl-4">
    <div class="card">
        <div class="card-body">
            <h4 class="header-title mt-0">Produksi Kanal</h4>

            <div class="widget-chart text-center">
                <div id="morris-donut-example" dir="ltr" style="height: 245px;" class="morris-chart"></div>
                <ul class="list-inline chart-detail-list mb-0">
                    <li class="list-inline-item">
                        <h5 style="color: #333;"><i class="fa fa-circle me-1"></i>11-07-2024</h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div><!-- end col -->
<script>
    var productKanal = [
            { label: "Humaniora", value: 12 },
            { label: "Politik", value: 30 },
            { label: "Teknologi", value: 20 },
            { label: "Asu", value: 20 },
        ]
    var colorproductKanal = ["#ff8acc", "#5b69bc", "#35b8e0", "#F9B9B9"]
</script>
    <script>
        let res = '[]';
        productKanal = JSON.parse(res)

        let color = '[]';
        colorproductKanal = JSON.parse(color)
    </script>
<div class="col-xl-8">
    <div class="card">
        <div class="card-body">
            <h4 class="header-title mt-0">Produksi berita hari ini (per jam)</h4>
            <div id="morris-line-example" dir="ltr" style="height: 280px;" class="morris-chart"></div>
        </div>
    </div>
</div><!-- end col -->
    <script>
        let data = `[{"hours":"00:00","a":0},{"hours":"01:00","a":0},{"hours":"02:00","a":0},{"hours":"03:00","a":0},{"hours":"04:00","a":0},{"hours":"05:00","a":0},{"hours":"06:00","a":0},{"hours":"07:00","a":0},{"hours":"08:00","a":0},{"hours":"09:00","a":0},{"hours":"10:00","a":0},{"hours":"11:00","a":0},{"hours":"12:00","a":0},{"hours":"13:00","a":0},{"hours":"14:00","a":0},{"hours":"15:00","a":0},{"hours":"16:00","a":0},{"hours":"17:00","a":0},{"hours":"18:00","a":0},{"hours":"19:00","a":0},{"hours":"20:00","a":0},{"hours":"21:00","a":0},{"hours":"22:00","a":0},{"hours":"23:00","a":0}]`
        productPerJam = JSON.parse(data)
    </script>
</div><div class='row'><div class="col-xl-4">
    <div class="card">
        <div class="card-body">
            <h4 class="header-title mb-3">Jadwal Piket Hari ini</h4>

            <div class="inbox-widget">
                
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">BASUKI EKA PURNAMA</h5>
                            <p class="inbox-item-text">06:00:59 - 14:00:00</p>
                            <p class="inbox-item-date">Pagi</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">THALATIE KAPRINA YANI</h5>
                            <p class="inbox-item-text">06:00:59 - 14:00:00</p>
                            <p class="inbox-item-date">Pagi</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">ANDHIKA PRASETYO</h5>
                            <p class="inbox-item-text">06:00:59 - 14:00:00</p>
                            <p class="inbox-item-date">Pagi</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">GANA BUANA</h5>
                            <p class="inbox-item-text">11:00:59 - 20:00:00</p>
                            <p class="inbox-item-date">Siang</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">WISNU ARTO SUBARI</h5>
                            <p class="inbox-item-text">11:00:59 - 20:00:00</p>
                            <p class="inbox-item-date">Siang</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">PUTRI ROSMALIA OCTAVIYANI</h5>
                            <p class="inbox-item-text">11:00:59 - 20:00:00</p>
                            <p class="inbox-item-date">Siang</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">BUDI ERNANTO</h5>
                            <p class="inbox-item-text">16:00:59 - 00:00:00</p>
                            <p class="inbox-item-date">Malam</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">PUTRA ANANDA PURWAPRADANA</h5>
                            <p class="inbox-item-text">16:00:59 - 00:00:00</p>
                            <p class="inbox-item-date">Malam</p>
                        </a>
                    </div>
                                    <div class="inbox-item">
                        <a href="#">
                            <!-- <div class="inbox-item-img"><img src="assets/images/users/user-1.jpg" class="rounded-circle" alt=""></div> -->
                            <h5 class="inbox-item-author mt-0 mb-1">ABDILLAH M. MARZUQI</h5>
                            <p class="inbox-item-text">16:00:59 - 00:00:00</p>
                            <p class="inbox-item-date">Malam</p>
                        </a>
                    </div>
                            </div>
        </div>
    </div>
    
</div><!-- end col --><div class="col-xl-8">
    <div class="card">
        <div class="card-body">
            <div class="dropdown float-end">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="mdi mdi-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Another action</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Something else</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Separated link</a>
                </div>
            </div>

            <h4 class="header-title mt-0 mb-3">Berita Publish Hari Ini</h4>

            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Judul</th>
                        <th>ID</th>
                        <th>Redaksi</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                                            </tbody>
                </table>
            </div>
        </div> 
    </div>
    
</div><!-- end col --></div>

                </div> <!-- container-fluid -->

            </div> <!-- content -->
            <!-- Footer Start -->
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <script>document.write(new Date().getFullYear())</script> &copy;  
            </div>
        </div>
    </div>
</footer>
<!-- end Footer -->

        </div>
        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->


    </div>
    <!-- END wrapper -->


    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>

    <!-- Vendor -->
    <script src="/assets/libs/jquery/jquery.min.js"></script>
    <script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/libs/simplebar/simplebar.min.js"></script>
    <script src="/assets/libs/node-waves/waves.min.js"></script>
    <script src="/assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="/assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
    <script src="/assets/libs/feather-icons/feather.min.js"></script>
    <script src="/assets/libs/repeater/repeater.js"></script>
    <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/htmx.org@1.5.0"></script>

    <!-- knob plugin -->
    <script src="/assets/libs/jquery-knob/jquery.knob.min.js"></script>

    <!--Morris Chart-->
    <script src="/assets/libs/morris.js06/morris.min.js"></script>
    <script src="/assets/libs/raphael/raphael.min.js"></script>

    <!-- Plugins js -->
    <!-- <script src="/assets/libs/quill/quill.min.js"></script> -->
    <!-- select2 -->
    <script src="/assets/libs/select2/js/select2.min.js"></script>
    <!-- Init js-->
    <!-- <script src="/assets/js/pages/form-quilljs.init.js"></script> -->
    <script src="/assets/libs/feather-icons/feather.min.js"></script>
    <!--Morris Chart-->
    <script src="/assets/libs/morris.js06/morris.min.js"></script>
    <script src="/assets/libs/raphael/raphael.min.js"></script>

            <script>
            let produksiPerJam = []
        </script>
        <!-- Dashboar init js-->
        <script src="/assets/js/pages/dashboard.init.js"></script>
        <script src="/assets/libs/ckeditor/ckeditor.js"></script>



    <!-- Plugins js -->
    <script src="/assets/libs/dropify/js/dropify.min.js"></script>
    <script src="/assets/js/pages/form-fileuploads.init.js"></script>
    <!-- App js-->
    <script src="/assets/js/app.min.js"></script>
    <script src="/assets/js/function.js"></script>
    <script src="/assets/libs/flatpickr/flatpickr.min.js"></script>
    <script src="/assets/libs/spectrum-colorpicker2/spectrum.min.js"></script>
    <script src="/assets/libs/clockpicker/bootstrap-clockpicker.min.js"></script>
    <script src="/assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="/assets/js/pages/form-pickers.init.js"></script>
    <!-- third party js -->
    <script src="/assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="/assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js"></script>
    <script src="/assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="/assets/libs/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js"></script>
    <script src="/assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="/assets/libs/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js"></script>
    <script src="/assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="/assets/libs/datatables.net-buttons/js/buttons.flash.min.js"></script>
    <script src="/assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="/assets/libs/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
    <script src="/assets/libs/datatables.net-select/js/dataTables.select.min.js"></script>
    <script src="/assets/libs/pdfmake/build/pdfmake.min.js"></script>
    <script src="/assets/libs/pdfmake/build/vfs_fonts.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>


    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>




    <script>
        const initDatatable = (id, columns, url) => {
            $(id).DataTable({
                processing: true,
                serverSide: true,
                ajax: url,
                "language": {
                    "lengthMenu": '_MENU_',
                    "search": '',
                    "searchPlaceholder": "search"
                },
                columns: columns,
                search: {
                    return: true
                }
            });
        }

        function convertToSlug(Text) {
            return Text.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
        }

        if ($('#summary').length) {
            CKEDITOR.replace('summary', {
                height: 70,
                toolbar: [
                    []
                ],
                extraPlugins: 'wordcount',
                toolbarLocation: 'bottom',
                toolbarStartupExpanded: false,
                toolbarCanCollapse: false,
                removePlugins: 'resize,image',
                versionCheck: false,
                wordcount: {
                    countHTML: false,
                    showCharCount: true,
                    showWordCount: false,
                    showParagraphs: false,
                    maxCharCount: 165
                }
            });
        }

        if ($('#content').length) {
            CKEDITOR.replace('content', {
                height: 400,
                versionCheck: false,
                extraPlugins: 'easyimage',
                removePlugins: 'image,resize',
            });
        }

        $('.select2').select2();
    </script>
    </body>

</html>