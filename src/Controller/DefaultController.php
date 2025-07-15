<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        $navItems = [
            ['name' => 'Accueil', 'href' => '/', 'file' => 'home'],
            ['name' => 'Projets réalisés', 'href' => '/projets', 'file' => 'projets'],
            ['name' => 'Nos services', 'href' => '/services', 'file' => 'services'],
            ['name' => 'À propos', 'href' => '/apropos', 'file' => 'apropos'],
            ['name' => 'Contact', 'href' => '/contact', 'file' => 'contact'],
        ];

        return $this->render('index.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'home',
            'base_url' => '',
        ]);
    }
    
    #[Route('/projets', name: 'projets')]
    public function projets(): Response
    {
        // Même principe ici pour chaque page
        $navItems = [ /* identique à ci-dessus */ ];

        return $this->render('projets.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'projets',
            'base_url' => '',
        ]);
    }
    
    // Ajoute une méthode pour chaque page /service, /apropos, /contact...
}
