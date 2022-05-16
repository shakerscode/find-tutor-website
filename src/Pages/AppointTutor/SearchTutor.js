import React from 'react';

const SearchTutor = () => {
    return (
        <div class=" w-5/6 mx-auto">
            <label class="label mb-3 w-80 mx-auto">
                    <span class="label-text text-secondary text-center text-2xl font-bold uppercase">Choose your subject and tutor.</span>
                </label>
            <div class="input-group flex justify-center items-center">
                <select class="select select-bordered w-3/6 text-secondary border-2 border-primary">
                    <option disabled selected >Pick Your Subject</option>
                    <option>Math</option>
                    <option>English</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Music</option>
                </select>
                <button class="btn btn-primary text-white">Go</button>
            </div>
        </div>
    );
};

export default SearchTutor;