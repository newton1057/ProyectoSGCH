import {Router} from 'express';
import {createUsuario, ObtenerGrupos, ObtenerUsuario} from '../controllers/API.controllers.js';
const router = Router();

router.post('/ObtenerUsuario', ObtenerUsuario);
router.post('/CrearUsuario', createUsuario);
router.post('/ObtenerGrupos', ObtenerGrupos);

export default router;
