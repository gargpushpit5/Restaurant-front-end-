import { BLOGS} from '../shared/blogs';
import * as ActionTypes from './ActionTypes';

export const Blogs = (state = BLOGS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BLOG:
            var blog = action.payload;
            blog.id = state.length;
            blog.date = new Date().toISOString();
            console.log("Blog: ", blog);
            return state.concat(blog);

        default:
          return state;
      }
};
