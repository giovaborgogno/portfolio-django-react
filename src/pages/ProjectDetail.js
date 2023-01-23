import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
// components
import { connect } from 'react-redux';
import { get_project, get_projects } from '../redux/actions/projects';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageGallery from "../sections/project/ImageGallery";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// ----------------------------------------------------------------------

const ProjectDetail = ({
    get_project,
    project
}) => {
    const [openFilter, setOpenFilter] = useState(false);

    const params = useParams()
    const projectId = params.projectId;

    useEffect(() => {
        get_project(projectId)
    }, [])

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <>
            <Helmet>
                <title>Project Detail - Giovanni Borgogno - Portfolio </title>
            </Helmet>

            <Container>
                <Box sx={{ display: 'flex' }}>

                    <Link to='/projects'>
                        <ArrowBackIcon sx={{ color: "#5BE9B9", mt: 6 }} />
                    </Link>
                    <Typography variant="h4" sx={{ mt: 5, mx: 2 }}>
                        Project Detail:
                    </Typography>
                </Box>
                {project !== null && project && project.id.toString() === projectId.toString() ?
                    <>


                        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                                <ImageGallery data={project} />
                                {/* project info */}
                                <Card sx={{ mt: 3, py: 3, px: 3, }} className="md:mt-0">
                                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project && project.name}</h1>

                                        <div className="mt-3">
                                            <h2 className="sr-only">project information</h2>
                                            <p className="text-3xl text-gray-900">{project && project.category}</p>
                                        </div>



                                        <div className="mt-6">
                                            <h3 className="">Description:</h3>

                                            <div
                                                className="text-base text-gray-700 space-y-6"
                                                dangerouslySetInnerHTML={{ __html: project && project.description }}
                                            />
                                            <h3 className="mt-3">Website URL:</h3>

                                            <a href={project.url} target="_blank">{project.url}</a>

                                            {/* <a
                                            className="text-base text-gray-700 space-y-6"
                                            dangerouslySetInnerHTML={{ __html: project && project.url }}
                                        /> */}

                                            <h3 className="mt-3">GitHub Repo:</h3>
                                            <a href={project.git_repo} target="_blank">{project.git_repo}</a>

                                            {/* <a
                                            className="text-base text-gray-700 space-y-6"
                                            dangerouslySetInnerHTML={{ __html: project && project.git_repo }}
                                        /> */}
                                        </div>




                                    </div>
                                </Card>

                            </div>
                        </div>

                        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <projectFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>
        {projects !== null && projects && <>
        <ProductList products={projects} />
        </>}
        <ProductCartWidget /> */}
                    </>
                    :
                    <>
                        loading...
                    </>
                }
            </Container>
        </>
    );
}

const mapStateToProps = state => ({
    project: state.Projects.project
})

export default connect(mapStateToProps, {
    get_project,
    get_projects
})(ProjectDetail)