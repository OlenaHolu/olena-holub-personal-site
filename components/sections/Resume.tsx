import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export default function Resume() {
    const { t } = useTranslation('common');

    return (
        <section id="resume" className="min-h-screen bg-white px-4 sm:px-12 lg:px-24 py-5">
            <div className="flex justify-center mb-12">
                <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
                    {t('resume.sectionTitle')}
                </h2>
            </div>

            <div className="px-8 flex flex-col justify-around min-h-[calc(100vh-15rem)]">
                <div className="border-b border-gray-300 pb-10">
                    <h3 className="text-xl font-semibold mb-6">{t('resume.education.title')}</h3>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                {t('resume.education.webdev.title')}
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <Trans
                                    ns="common"
                                    i18nKey="resume.education.webdev.description"
                                    components={{
                                        1: <strong />,
                                        0: <br />
                                    }}
                                />
                            </p>
                        </div>
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                {t('resume.education.english.title')}
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <Trans
                                    ns="common"
                                    i18nKey="resume.education.english.description"
                                    components={{
                                        1: <strong />,
                                        0: <br />
                                    }}
                                />
                            </p>
                        </div>
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                {t('resume.education.masters.title')}
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <Trans
                                    ns="common"
                                    i18nKey="resume.education.masters.description"
                                    components={{
                                        1: <strong />,
                                        0: <br />
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>

                {/* EXPERIENCE BLOCK */}
                <div className="pb-10">
                    <h3 className="text-xl font-semibold mb-6">{t('resume.experience.title')}</h3>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                {t('resume.experience.fullstack.title')}
                            </h4> <br />
                            <h4 className="inline-block w-max text-md text-yellow-600 font-bold mb-2">
                                {t('resume.experience.fullstack.company')}
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <Trans
                                    ns="common"
                                    i18nKey="resume.experience.fullstack.description"
                                    components={{
                                        1: <strong />,
                                        0: <br />
                                    }}
                                />
                            </p>
                        </div>
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                {t('resume.experience.intern.title')}
                            </h4> <br />
                            <h4 className="inline-block w-max text-md text-yellow-600 font-bold mb-2">
                                {t('resume.experience.intern.company')}
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <Trans
                                    ns="common"
                                    i18nKey="resume.experience.intern.description"
                                    components={{
                                        1: <strong />,
                                        0: <br />
                                    }}
                                />
                            </p>
                        </div>

                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                {t('resume.experience.banking.title')}
                            </h4> <br />
                            <h4 className="inline-block w-max text-md text-yellow-600 font-bold mb-2">
                                {t('resume.experience.banking.company')}
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <Trans
                                    ns="common"
                                    i18nKey="resume.experience.banking.description"
                                    components={{
                                        1: <strong />,
                                        0: <br />
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}