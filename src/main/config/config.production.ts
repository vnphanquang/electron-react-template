import BaseConfig from './config.base';
import deepmerge from 'deepmerge';

const ProductionConfig = {

};

export default deepmerge(BaseConfig, ProductionConfig);
