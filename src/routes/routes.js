import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'Portfolio website Devani'}));

router.get('/contact', (req, res) => res.render('contact', {title: 'Portfolio website Devani'}));

router.get('/usuario', (req, res) => res.render('usuario', {title: 'Portfolio website Devani'}));

export default router;