"use server";
import { prisma } from "../lib/prisma";

export const getDataForCards = async (page: number, takeValue: number) => {
  const data = await prisma.proyectos.findMany({
    where: {
      activo: true,
    },
    orderBy: {
      id: "desc",
    },
    include: {
      areas: {
        include: {
          area: true,
        },
      },
      personal: {
        include: {
          personal: true,
        },
      },
    },
    take: takeValue,
    skip: page !== 0 ? (page - 1) * 5 : 0,
  });
  return data;
};

export const getAreas = async () => {
  return await prisma.areas.findMany({
    where: {
      activo: true,
    },
    orderBy: {
      area: "desc",
    },
  });
};

export const getPersonal = async () => {
  return await prisma.personal.findMany({
    where: {
      activo: true,
    },
    orderBy: {
      id: "desc",
    },
  });
};

export const getProjectsFiltered = async (
  areasId: number[],
  depto: string,
  personalId: number[],
  anio: number[],
  takeValue: number,
  page: number
) => {
  const projects = await prisma.proyectos.findMany({
    take: takeValue,
    skip: (page - 1) * takeValue,
    include: {
      areas: {
        include: {
          area: true,
        },
      },
      personal: {
        include: {
          personal: true,
        },
      },
    },
    where: {
      departamento: depto ? depto : undefined,
      anio_inicio:
        anio.length !== 0
          ? {
              in: anio,
            }
          : {},
      activo: true,
      AND: [
        areasId.length !== 0
          ? {
              areas: {
                some: {
                  idarea: {
                    in: areasId,
                  },
                },
              },
            }
          : {},
        personalId.length !== 0
          ? {
              personal: {
                some: {
                  id_personal: {
                    in: personalId,
                  },
                },
              },
            }
          : {},
      ],
    },
    orderBy: {
      id: "desc",
    },
  });
  const projectsCount = await getProjectCount(areasId, depto, personalId, anio);
  return {
    projects,
    projectsCount,
  };
};

export const getProjectCount = async (
  areasId: number[],
  depto: string,
  personalId: number[],
  anio: number[]
) => {
  return await prisma.proyectos.count({
    where: {
      departamento: depto ? depto : undefined,
      anio_inicio:
        anio.length !== 0
          ? {
              in: anio,
            }
          : {},
      activo: true,
      AND: [
        areasId.length !== 0
          ? {
              areas: {
                some: {
                  idarea: {
                    in: areasId,
                  },
                },
              },
            }
          : {},
        personalId.length !== 0
          ? {
              personal: {
                some: {
                  id_personal: {
                    in: personalId,
                  },
                },
              },
            }
          : {},
      ],
    },
  });
};

export const getTotalProjectsCount = async () => {
  return await prisma.proyectos.count();
};

export const getProjectById = async (id: number) => {
  return await prisma.proyectos.findUnique({
    include: {
      areas: {
        include: {
          area: true,
        },
      },
      personal: {
        include: {
          personal: true,
        },
      },
    },
    where: {
      id,
    },
  });
};
