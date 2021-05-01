import { useForm, useFormState } from 'react-hook-form';

import ErrorNotification from './ErrorNotification';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
    const { dirtyFields } = useFormState({control});

    const name = watch('name');
    const city = watch('city');

    const onSubmit = (data) => {
        console.log('Wartości', data);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12">
                        <h3>Tutaj nasłuchuję na wartość pola Imię: { name }</h3>
                    </div>
                    <div className="col-12 mb-2">
                        <label>Imię</label>
                        <input
                            className="form-control"
                            {...register("name", { required: true })}
                        />
                        <ErrorNotification field={errors.name} />
                    </div>
                    <div className="col-6 mb-2">
                        <label>Nazwisko</label>
                        <input
                            className="form-control"
                            {...register("surname", { required: true })}
                        />
                        <ErrorNotification field={errors.surname} />
                    </div>
                    <div className="col-6 mb-2">
                        <label>Zawód</label>
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
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <label>Wiek</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    {...register("age", { required: true, validate: value => value >= '0' })}
                                />
                                <ErrorNotification field={errors.age} msg="Wartość nie może być ujemna" />
                            </div>
                            <div className="col-6">
                                <label>Miasto</label>
                                <select className="form-control" {...register("city")}>
                                    <option value="warszawa">Warszawa</option>
                                    <option value="cracow">Kraków</option>
                                    <option value="poznan">Poznań</option>
                                    <option value="gdansk">Gdańsk</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {
                        city === 'cracow' && (
                            <div className="col-12">
                                <label>Dzielnica Krakowa</label>
                                <input
                                    className="form-control"
                                    {...register("district")}
                                />
                            </div>
                        )
                    }
                    <div className="col-12 mt-4 text-right">
                        <input className="btn btn-primary" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
