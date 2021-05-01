import { useForm, useFormState } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
    const { dirtyFields } = useFormState({control});

    const name = watch('name')

    const onSubmit = (data) => {
        console.log('dirtyFields', dirtyFields);
    };

    const invalidStyled = {
        fontSize: '11px',
        color: '#dc3545',
        fontWeight: '500',
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12">{ name }</div>
                    <div className="col-12 mb-2">
                        <input
                            className="form-control"
                            defaultValue="test"
                            {...register("name")}
                        />
                    </div>
                    <div className="col-6 mb-2">
                        <input
                            className="form-control"
                            {...register("surname", { required: true })}
                        />
                        { errors.surname && <span style={invalidStyled}>Surname name is required</span> }
                    </div>
                    <div className="col-6 mb-2">
                        <input
                            className="form-control"
                            {...register("occuppation")}
                        />
                    </div>
                    <div className="col-12">
                        <h2>Custom form content</h2>
                        <p>Everything inside the form is custom html provided by me</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sequi molestiae, aliquam, eaque, ullam corrupti debitis iure cumque omnis consequatur pariatur iste reprehenderit quia deleniti sit dicta voluptatem. Et, architecto!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias, beatae aut sequi accusantium porro praesentium doloremque iure autem, atque accusamus. Possimus temporibus quae perspiciatis eveniet nulla debitis commodi minus!</p>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="row">
                            <div className="col-4">
                                <input
                                    className="form-control"
                                    type="number"
                                    {...register("occuppation")}
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    className="form-control"
                                    {...register("occuppation")}
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    className="form-control"
                                    {...register("occuppation")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-right">
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
        </div>
    );
}

export default Form;
