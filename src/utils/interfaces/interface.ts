export interface ListCardsStruct {
  id: number;
  titulo: string | null;
  activo: boolean | null;
  mes_inicio: number | null;
  anio_inicio: number | null;
  departamento: string | null;
  pdf: string | null;
  mes_finalizacion: number | null;
  anio_finalizacion: number | null;
  descripcion: string | null;
  cita: string | null;
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
