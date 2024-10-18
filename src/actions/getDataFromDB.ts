"use server";
import { prisma } from "../lib/prisma";

export const getDataForCards = async () => {
  const data = await prisma.proyectos.findMany({
    where: {
      activo: true,
    },
    orderBy: {
        id: 'desc'
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
    take: 3,
  });
  return data;
};
