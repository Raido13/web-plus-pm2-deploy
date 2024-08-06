import { Router } from 'express';
import {
  getUser, updateUserInfo, updateUserAvatar, getCurrentUser,
} from '../controllers/users';
import { validateObjId, validateAvatar, validateProfile } from '../middlewares/validatons';

const router = Router();

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0)
});

router.get('/me', getCurrentUser);
router.get('/:id', validateObjId, getUser);
router.patch('/me/avatar', validateAvatar, updateUserAvatar);
router.patch('/me', validateProfile, updateUserInfo);

export default router;
