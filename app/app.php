<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(-1);

require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;

$app = new Silex\Application();

$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__ . '/../views',
    'twig.options' => array('debug' => true),
));

$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

$app->before(function () use ($app) {
    $siteActive = true;
    $phoneNumber = '570-629-2330';
    $emailAddress = 'info@dlninteriordesign.com';
    $baseUrl = 'http://www.dlninteriordesign.com';

    $app['twig']->addGlobal('site_active', $siteActive);
    $app['twig']->addGlobal('phone_number', $phoneNumber);
    $app['twig']->addGlobal('email_address', $emailAddress);
    $app['twig']->addGlobal('base_url', $baseUrl);
});

// Index page
$app->get('/', function() use ($app) {
    return $app['twig']->render('homepage/index.html.twig');
});

// Other pages
// $app->get('/services', function() use ($app) {
//     return $app['twig']->render('services/index.html.twig');
// });

// Error - redirect to home
$app->error(function (\Exception $e, $code) use ($app) {
    return $app->redirect('/');
});

return $app;
