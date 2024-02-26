import React from 'react'
import { Parallax } from 'react-parallax'
function Para1() {
  return (
    <div>
       <div>
       <Parallax strength={300} bgImage='https://printler.com/media/photo/154519.jpg'>
        <div className='content'>
            <div className='text-content'>A trip to space</div> 
        </div>
      </Parallax>
      <p className='para1'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officiis ut cupiditate doloribus cumque beatae animi quis perspiciatis necessitatibus ullam voluptas eos ab quasi hic dolorum dolor repellendus veritatis labore?
        Quae illo architecto temporibus nihil cum possimus dolorem laboriosam accusamus sequi magni repellat rerum commodi provident consequuntur, tempora delectus repudiandae sed tenetur consectetur. Ea totam sit similique reprehenderit fugit repellat.
        Commodi rem harum accusantium, quaerat aliquam aspernatur sapiente doloribus dolorem, nesciunt consequuntur, laboriosam reprehenderit nostrum veniam quam blanditiis consequatur eaque voluptatem at impedit perspiciatis? Odit accusamus molestiae vitae natus officiis.
        Dolorum aperiam explicabo nulla, adipisci culpa saepe exercitationem voluptates velit ullam dignissimos quidem ea perferendis enim quo, accusantium hic fuga repellendus, dolore architecto dicta quod asperiores excepturi obcaecati. Totam, iusto?
      </p>
    </div>
    <Parallax className='image2' strength={300} bgImage='https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
        <div className='content2'>
        <div className='second'></div> 
        </div>
      </Parallax>
      <p className='para1'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officiis ut cupiditate doloribus cumque beatae animi quis perspiciatis necessitatibus ullam voluptas eos ab quasi hic dolorum dolor repellendus veritatis labore?
        Quae illo architecto temporibus nihil cum possimus dolorem laboriosam accusamus sequi magni repellat rerum commodi provident consequuntur, tempora delectus repudiandae sed tenetur consectetur. Ea totam sit similique reprehenderit fugit repellat.
        Commodi rem harum accusantium, quaerat aliquam aspernatur sapiente doloribus dolorem, nesciunt consequuntur, laboriosam reprehenderit nostrum veniam quam blanditiis consequatur eaque voluptatem at impedit perspiciatis? Odit accusamus molestiae vitae natus officiis.
        Dolorum aperiam explicabo nulla, adipisci culpa saepe exercitationem voluptates velit ullam dignissimos quidem ea perferendis enim quo, accusantium hic fuga repellendus, dolore architecto dicta quod asperiores excepturi obcaecati. Totam, iusto?
      </p>
    </div>
  )
}

export default Para1
