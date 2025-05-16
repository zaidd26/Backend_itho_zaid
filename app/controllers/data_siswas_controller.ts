import type { HttpContext } from '@adonisjs/core/http'
import DataSiswa from '#models/data_siswa'

export default class DataSiswasController {
    public async index({ response } : HttpContext) {
            const  data_siswas = await DataSiswa.all()
            return response.ok(data_siswas);
        }
    
        public async store({ request, response }: HttpContext) {
            const data = request.only(['nama', 'kelas', 'jurusan']);
            const data_siswas = await DataSiswa.create(data)
            return response.created(data_siswas); 
        }
    
        public async show({ params, response }: HttpContext) {
            const data_siswas = await DataSiswa.find(params.id)
            if(!data_siswas) {
                return response.notFound({message: 'Buku gaada co'})
            }
            return response.ok({
                status: 'success',
                massage: 'Data Siswa Found',
                data: data_siswas
            });
        }
        
        public async update({ params, request, response }: HttpContext) {
            const data_siswas = await DataSiswa.find(params.id)
            if(!data_siswas) {
                return response.notFound({message: 'Buku gaada co'})
            }
            const data = (request.only(['nama', 'kelas', 'jurusan']));
            data_siswas.merge(data);
            await data_siswas.save();
            return response.ok(data_siswas);
        }
    
        public async destroy({ params, response }: HttpContext) {
            const data_siswas = await DataSiswa.find(params.id)
            if(!data_siswas) {
                return response.notFound({message: 'Buku gaada co'})
            }
            await data_siswas.delete();
            return response.noContent();
        }
}