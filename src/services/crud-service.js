class CrudService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    try {
      const response = await this.respository.create(data);
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw response;
    }
  }
  async destroy(modelId) {
    try {
      const response = await this.repository.destroy({
        where: {
          id: modelId,
        },
      });
    } catch (error) {
      console.log("error at crud serice layer");
      throw response;
    }
  }
  async get(modelId) {
    try {
      const response = await this.repository.getByPk(modelId);
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw response;
    }
  }
  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw response;
    }
  }
  async update(data,modelId) {
    try {
        const response=await this.repository.update(id,data);
        return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw response;
    }
  }
}
module.exports = CrudService;
