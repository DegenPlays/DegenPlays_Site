import Image from 'next/image'
import TargetImage from '@/public/images/features-02-image2.png'

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">From humble beginnings to significant rewards, allow DegenPlays to assist in expanding your wealth.</h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <Image className="mx-auto md:max-w-none" src={TargetImage} width={540} height={540} alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">Earn without all the effort</div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-purple-600">.</span> For those with low capital</h4>
                    <p className="text-lg text-gray-400">If you have limited capital but want to benefit from these opportunities DegenPlay is here to help. A small upfront cost can gain large returns.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-teal-500">.</span> For those who want to diversify</h4>
                    <p className="text-lg text-gray-400">Finding and vetting these degen plays can be hard DegenPlays take that work on for you allowing you to be apart of multiple plays at once.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-pink-500">.</span> For those with little time</h4>
                    <p className="text-lg text-gray-400">Monitoring and optimizing your returns in some of these plays can be like a full time job, DegenPlays handle all of that for you.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
