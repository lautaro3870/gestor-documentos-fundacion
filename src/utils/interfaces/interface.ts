export interface ListCardsStruct {
  id: number;
  titulo: string;
  activo: boolean;
  mes_inicio: number
  anio_inicio: number
  departamento: String
  pdf: String
  mes_finalizacion: number
  anio_finalizacion: number
  descripcion: String
  cita: String
  areas: Area[];
  personal: Personal[]
}

export interface Area {
  idarea: number;
  idproyecto: number;
  area: {
    id: number;
    area: string;
  };
}

export interface Personal {
    id_proyecto: number;
    id_personal: number;
    personal: {
        id: number;
        nombre: string;
        activo: boolean;
    }
}
