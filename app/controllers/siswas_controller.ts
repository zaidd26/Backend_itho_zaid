import type { HttpContext } from '@adonisjs/core/http'

export default class SiswasController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
  const data = {
    id : 1,
    name : 'Arif',
    age : 80
  }
  return response.json({"data siswa": data})
}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}


async KirimData({request, response, session}: HttpContext) {
  const datasiswa = request.only(['id', 'nama', 'kelas', 'umur'])

  session.put('id', datasiswa.id)
  session.put('nama', datasiswa.nama)
  session.put('kelas', datasiswa.kelas)
  session.put('umur', datasiswa.umur)
  return response.json({'data siswa' : datasiswa})
}

async AmbilData({response, session}: 
  HttpContext){

  const id = session.get('id')
  
  return response.json({'data id siswa': id })
}}
