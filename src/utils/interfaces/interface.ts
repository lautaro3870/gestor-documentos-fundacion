export interface ListCardsStruct {
  id: number;
  titulo: string;
  activo: boolean;
  mes_inicio: number;
  anio_inicio: number;
  departamento: string;
  pdf: string;
  mes_finalizacion: number;
  anio_finalizacion: number;
  descripcion: string;
  cita: string;
  areas: AreaxProyecto[];
  personal: PersonalxProyecto[];
}

export interface AreaxProyecto {
  idarea: number;
  idproyecto: number;
  area: {
    id: number;
    area: string;
  };
}

export interface PersonalxProyecto {
  id_proyecto: number;
  id_personal: number;
  personal: {
    id: number;
    nombre: string;
    activo: boolean;
  };
}

export type Area = {
  id: number;
  area: string;
}[];

export type Personal = {
  id: number;
  nombre: string;
};

export type FilterProp = {
  area: number[];
  departamento: string;
  personal: number[];
  anio: number[];
};
