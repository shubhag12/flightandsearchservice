class CrudService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw error;
    }
  }
  async destroy(modelId) {
    try {
      const response = await this.repository.destroy({
        where: {
          id: modelId,
        },
      });
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw error;
    }
  }
  async get(modelId) {
    try {
      const response = await this.repository.getByPk(modelId);
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw error;
    }
  }
  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw error;
    }
  }
  async update(data, modelId) {
    try {
      const response = await this.repository.update(id, data);
      return response;
    } catch (error) {
      console.log("error at crud serice layer");
      throw error;
    }
  }
}
module.exports = CrudService;
