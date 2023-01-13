import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { connect } from 'react-redux';
import { get_project, get_projects } from '../redux/actions/projects';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from "../components/project/ImageGallery";

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
                <title> Dashboard: Products | Minimal UI </title>
            </Helmet>

            <Container>
                {project !== null && project && project.id.toString() === projectId.toString() ?
                    <>


                        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                                <ImageGallery data={project} />
                                {/* project info */}
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
                                        <h3 className="">Website URL:</h3>

                                        <div
                                            className="text-base text-gray-700 space-y-6"
                                            dangerouslySetInnerHTML={{ __html: project && project.url }}
                                        />

                                        <h3 className="">GitHub Repo:</h3>

                                        <div
                                            className="text-base text-gray-700 space-y-6"
                                            dangerouslySetInnerHTML={{ __html: project && project.git_repo }}
                                        />
                                    </div>

                                    <div className="mt-6">





                                        {/* <p className="mt-4">
                                    {
                                        project &&
                                            project !== null &&
                                            project !== undefined &&
                                            project.quantity > 0 ? (
                                            <span className='text-green-500'>
                                                In Stock
                                            </span>
                                        ) : (
                                            <span className='text-red-500'>
                                                Out of Stock
                                            </span>
                                        )
                                    }
                                </p> */}



                                        {/* <div className="mt-4 flex sm:flex-col1">
                                    {loading ?
                                        <button
                                            className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                                        >
                                            <Oval
                                                type="Oval"
                                                color="#fff"
                                                width={20}
                                                height={20}
                                            />
                                        </button>
                                        :
                                        project_added ?
                                            <button
                                                onClick={removeToCart}
                                                className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                                            >
                                                Remove to cart
                                            </button>
                                            :
                                            <button
                                                onClick={addToCart}
                                                className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                                            >
                                                Add to cart
                                            </button>
                                    }

                                    {isFavorite? 
                                    <button
                                    onClick={addToWishlist}
                                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-red-400 hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                    <span className="sr-only">Add to favorites</span>
                                </button>
                                :
                                <button
                                        onClick={addToWishlist}
                                        className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-red-100 hover:text-red-500"
                                    >
                                        <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                        <span className="sr-only">Add to favorites</span>
                                    </button>
                                    }

                                
                                </div>
                                <Link to="/cart">
                                    <button
                                        className=" pt-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                    >
                                        View Cart
                                    </button>
                                </Link> */}

                                    </div>


                                </div>

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