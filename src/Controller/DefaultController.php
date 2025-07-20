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
        $navItems = $this->getNavItems();

        return $this->render('index.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'home',
        ]);
    }

    #[Route('/projets', name: 'projets')]
    public function projets(): Response
    {
        $navItems = $this->getNavItems();

        return $this->render('/pages/projets.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'projets',
        ]);
    }

    #[Route('/services', name: 'services')]
    public function services(): Response
    {
        $navItems = $this->getNavItems();

        return $this->render('/pages/services.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'services',
        ]);
    }

    #[Route('/apropos', name: 'apropos')]
    public function apropos(): Response
    {
        $navItems = $this->getNavItems();

        return $this->render('/pages/apropos.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'apropos',
        ]);
    }

    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {
        $navItems = $this->getNavItems();

        return $this->render('/pages/contact.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'contact',
        ]);
    }

    #[Route('/mentions-legales', name: 'mentions_legales')]
    public function mentionsLegales(): Response
    {
        $navItems = $this->getNavItems();

        return $this->render('/pages/mentions_legales.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'mentions_legales',
        ]);
    }

    #[Route('/confidentialite', name: 'confidentialite')]
    public function confidentialite(): Response
    {
        $navItems = $this->getNavItems();

        return $this->render('/pages/confidentialite.html.twig', [
            'nav_items' => $navItems,
            'current_page' => 'confidentialite',
        ]);
    }

    /**
     * Méthode privée qui retourne le tableau des items de navigation
     */
    private function getNavItems(): array
    {
        return [
            ['label' => 'Accueil', 'route' => 'home'],
            ['label' => 'Projets réalisés', 'route' => 'projets'],
            ['label' => 'Nos services', 'route' => 'services'],
            ['label' => 'À propos', 'route' => 'apropos'],
            ['label' => 'Contact', 'route' => 'contact'],
        ];
    }

}
