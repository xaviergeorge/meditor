<!doctype html>
<!--[if IE 7 ]>		 <html class="no-js ie ie7 lte7 lte8 lte9" lang="en-US"> <![endif]-->
<!--[if IE 8 ]>		 <html class="no-js ie ie8 lte8 lte9" lang="en-US"> <![endif]-->
<!--[if IE 9 ]>		 <html class="no-js ie ie9 lte9>" lang="en-US"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>meditor</title>

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/static/css/screen.css" />
    <link rel="stylesheet" type="text/css" href="/static/fonts/glyphico/style.css" />

    <script type="text/javascript" src="static/vendor/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="static/vendor/underscore.js"></script>

    <script type="text/javascript" src="static/vendor/mindy/jquery.mdropdown.js"></script>

    <script type="text/javascript" src="static/js/utils.js"></script>
    <script type="text/javascript" src="static/js/core.js"></script>
    <script type="text/javascript" src="static/js/engine.js"></script>
    <script type="text/javascript" src="static/js/editor.js"></script>
    <script type="text/javascript" src="static/js/block.js"></script>

    <script type="text/javascript" src="static/js/plugins/text/text.js"></script>
    <script type="text/javascript" src="static/js/plugins/lost.js"></script>
    <script type="text/javascript" src="static/js/plugins/space.js"></script>
    <script type="text/javascript" src="static/js/plugins/map/map.js"></script>

    <script type="text/javascript">
        $(function() {
            var editor = meditor.init('#meditor', {
                language: 'ru',
                plugins: ['space', 'text', 'map']
            });
        })
    </script>
</head>
<body>
    <section id="wrapper">
        <form method="POST">
            <textarea name="editor" id="meditor" cols="30" rows="10"><?php echo $editor ?></textarea>
            <button class="button">
                Сохранить
            </button>
        </form>
    </section>
</body>
</html>