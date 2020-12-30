import BaseConfig from './config.base';
import deepmerge from 'deepmerge';

const DevelopmentConfig = {
  
};

export default deepmerge(BaseConfig, DevelopmentConfig);
