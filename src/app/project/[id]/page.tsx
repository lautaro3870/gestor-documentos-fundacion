'use client';
import { getProjectById } from '@/actions/getDataFromDB';
import { ListCardsStruct } from '@/utils/interfaces/interface';
import { useEffect, useState } from 'react';
import styles from '../../page.module.css';
import { Box, CircularProgress, Typography } from '@mui/material';
import ListPersonal from '@/app/components/ListPersonal/ListPersonal';
import DownloadLink from '@/app/components/DownloadLink/DownloadLink';
import Grid from '@mui/material/Grid2';
import { getMonthByNumber } from '@/utils/methods/serviceUtils';

export default function Project({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<ListCardsStruct>({
    id: 0,
    activo: false,
    anio_finalizacion: 0,
    anio_inicio: 0,
    areas: [],
    descripcion: '',
    cita: '',
    departamento: '',
    mes_finalizacion: 0,
    mes_inicio: 0,
    pdf: '',
    personal: [],
    titulo: '',
  });

  useEffect(() => {
    const getProject = async () => {
      const project = await getProjectById(parseInt(params.id));
      if (project) {
        setProject(project);
      }
    };
    getProject();
  }, []);

  const getAreasList = (card: ListCardsStruct) => {
    return card?.areas.map((a, index) => (
      <div
        key={index}
        style={{
          border: 'solid',
          borderWidth: 2,
          borderRadius: '0.2rem',
          borderColor: 'gray',
          margin: 2,
          padding: 3,
        }}
      >
        <Typography align="center" sx={{ fontSize: 16 }} key={index}>
          {a.area.area}
        </Typography>
      </div>
    ));
  };

  return (
    <main className={project.personal?.length !== 0 ? '' : styles.mainLoading}>
      {project.personal?.length === 0 ? (
        <CircularProgress size="3rem" />
      ) : (
        <div
          style={{
            marginBottom: '8rem',
          }}
        >
          <Grid
            container
            spacing={2}
            className={styles.projectContainer}
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              height: 'auto',
              minHeight: '23rem',
              width: '100%',
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid
              size={{ xs: 12, md: 8, lg: 8, sm: 8, xl: 8 }}
              sx={{
                height: { xl: '15rem', lg: 'auto', sm: 'auto', md: 'auto' },
              }}
            >
              <Typography variant="h3" fontSize="1rem">
                {getMonthByNumber(project.mes_inicio)?.mes}{' '}
                {project.anio_inicio} <strong>{project.departamento}</strong>
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: 'text.primary' }}
                fontSize={{
                  xs: '1.3rem', // Tamaño para pantallas pequeñas (móviles)
                  sm: '1.6rem', // Tamaño para pantallas medianas
                  md: '2rem', // Tamaño para pantallas grandes (tablets y desktops)
                  lg: '2rem', // Tamaño para pantallas extra grandes
                }}
                variant="h6"
              >
                {project?.titulo}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  marginBottom: 2,
                }}
              >
                {getAreasList(project)}
              </Box>
              {project.pdf && <DownloadLink project={project} />}
            </Grid>
          </Grid>

          <div
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Grid container spacing={4}>
              <Grid
                size={{ xs: 12, md: 8, lg: 8, sm: 12, xl: 8 }}
                sx={{
                  paddingLeft: {
                    xs: '1rem',
                    lg: '10rem',
                    xl: '20rem',
                    md: '5rem',
                  },
                  paddingRight: {
                    xs: '1rem',
                  },
                }}
              >
                {project.cita === null ? (
                  <div></div>
                ) : (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontSize: 25, marginBottom: '1rem' }}
                    >
                      Cita
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: 20,
                        fontStyle: 'italic',
                      }}
                      align="justify"
                    >
                      {project.cita}
                    </Typography>
                  </Box>
                )}

                <Box sx={{ marginTop: '2rem' }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: 25, marginBottom: '1rem' }}
                  >
                    Descripción
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 20,
                      '&::first-letter': {
                        textTransform: 'uppercase',
                        fontSize: 55,
                        lineHeight: '0.8', // Ajusta la altura de línea de la primera letra
                        float: 'left', // Hace que la letra "flote" a la izquierda
                        marginRight: '.5rem', // Espacio entre la primera letra y el texto
                        marginTop: '.3rem', // Ajusta la posición vertical
                      },
                    }}
                    align="justify"
                  >
                    {project.descripcion}
                  </Typography>
                </Box>
              </Grid>

              <Grid
                size={{ xs: 12, md: 4, lg: 4, sm: 12, xl: 4 }}
                sx={{
                  position: 'sticky',
                  height: 'fit-content', // Ajusta automáticamente a su contenido
                  padding: '1rem',
                  paddingTop: {
                    xl: '1rem',
                    lg: '1rem',
                    xs: '3rem',
                    md: '1rem',
                  },
                }}
              >
                <Box>
                  <ListPersonal personal={project?.personal} />
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </main>
  );
}
