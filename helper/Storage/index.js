import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE }from 'react-native-secure-storage'

const config = {
  accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
  accessible: ACCESSIBLE.WHEN_UNLOCKED,
  authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
}

class SecureInternalStorage {

  static getItem = async (KEY) => {
    try {
      return await SecureStorage.getItem(KEY, config)
    } catch (e) {
      // read error
      return null;
    }
  };

  static setItem = async (KEY, VALUE) => {
    try {
      await SecureStorage.setItem(KEY, VALUE,config);
    } catch (e) {
      // save error
    }
  };

  static removeItem = async (KEY) => {
    try {
      await SecureStorage.removeItem(KEY,config);
    } catch (e) {
      // remove error
    }
  };
}

export {SecureInternalStorage, } ;