import { create } from 'zustand';
import { persist, StorageValue } from 'zustand/middleware';
import { asyncStorage } from '~/shared/services/async-storege.service';
import {
  Gender,
  ProfileFormRequest,
  User,
} from '~/shared/components/profile-form/profile-form.type';
import { ICollection } from '~/modules/screens/home/home.type.ts';

const defaultUserData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  gender: Gender.UNSET,
  photoUri: '',
};

type TProfileStore = {
  user: User;
  addImage: (uri: string) => void;
  gallery: ICollection[];
  setUserData: (user: ProfileFormRequest) => void;
  resetUserData: () => void;
};

const defaultGallery: ICollection[] = [
  {
    heading: 'Party Vibes',
    gallery: [
      'https://s3-alpha-sig.figma.com/img/04ac/6cb8/9949ac84af1f26fcff417e1575802011?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CersxvtstGPm7R3QJOVZH~8teTOn5NFoKJV5DCfpF27YP7WJZFOAExnO72qgLfptcDR88goUpxZhbhIhFZHQWn1iW08D3726Cl7tbR7jeJ13VBq02UFlFEq7MdSOFKpzXOzUl-ueTg3-iJLVwjzZc2Y9b0t41NcHvBu84fuEGIbFlo53Fh5d47WcAFzRIlJfQI4-wp84G~cRCidkmQrhaByNWwy1YqUNtHzlK7vQaT1O8fZoGVXTwc4ZhD8r-7vATFrolxpDVMDf54CrD7rbx-SzhyLEj1DwZfvEr7ioLXjmOofN6IIZ9YYLD1PMTK28Qff2hb5pitvNYeBPVNcyRA__',
      'https://s3-alpha-sig.figma.com/img/e269/a034/dfe3603ff110c79365d4fd66b8c25966?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jDbq8rV9-MXspuSpkWwo2CSmirNhqwGgVCOVfukax4D5bCJ6iultpdMbIJIDaZJC0CwN91FE0S8OQrlOP6GEGXMjGbY6yi6Ep-JHtpzqa9P0TwcAG1Ux68HPz9iS0aZ7KFPEuZLbSOeeViq6G9uanBpb8HlTJtiI7Qbh5WTmyiPcyl~2f0pLnxC8~g8-klGtV2iDgcyPPRjsUQU0v-5vZc1ZQ50eaWr3zBCyVDXPpRMJNWJ2o0ZMikiNZL7HkNcMPWxGIj-gUk4z0vMs0gcJWjojGmmpZaKzXPNDQh~DcSTIGJOuA0SISaxk4U8vBEmCePty5qQ2vjcDbMkhJTUpkg__',
      'https://s3-alpha-sig.figma.com/img/0c5d/9939/67ae3b07b57607ecdb93764671dc9fc6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qeS-CDYsXajg-wGq3Km4-K-J2v1Ret3aZqBB9ND0~iQUPJbRA4j8~a2~mEH2~zGiucQBT8rAEsnN74i-IvR77KGRh4Up8gqbKGTewK5C-9V4bGsP6hD~D4sOjmwl9HQaHK40JMU8L9c5KA4rSt7p6J5CHoyYbfY-wDCF1D8cDD2G5vbrxUR~Rv5lXwubenxc~7Uc2YvLG4OTxqtsbGAZdyU3ikrh0ZFbcda0UiduKSGgC1pVSGrmkgy9AksaCFc9ucrO1QMGA9yBZ0gmxccpg1EcU0Zr2XV~xLw2H96IsG4rW-CNggt~IkGeW6kiihIZ3JBwyiKkX5uswkLxATvikQ__',
      'https://s3-alpha-sig.figma.com/img/49ce/542d/e16a3fcd06a41c57956267fb36d108d5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OVpeF88fAQrt-gcTkR5SyIlMvUKW2sN7FWpgBpIIWj-Bc9yslrMdvCcpTr8aRR5tMC3wKVan9CaYv~4CrYSjK54zOGHI8kFZD3ju5-T4-sFCEJSpGUcBw~7I7OLKsf~eUbMZ78IrKIvLctb77GgViwYyZXQtoz5YP5UwfaCYs1ylb9XSE~~mY4MZ~r8bvONNaDYke6aI9ZXSi-gMEMQ1kg-XzpNPpSJX7xvKYcX~D1LKqkBHv3e0e-hpvsH7yKOh3F-POviCkkCEYVrsOcvhlwU3jPg6U7b1k~fobJPbQfADRsaUuLtUfQIcBY1Ij-Ki7rqRlSqB9UtjgCBGGGDX3Q__',
      'https://s3-alpha-sig.figma.com/img/c709/19ec/81fd64b4a4bf31fa07ae293707bac068?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D7hCIQJ~7ySr7aJu6M0sxwXioOtKC4~oTqAXRd4Xk06K9TaMQrqzCmAekC-3Tm3aWhs4~mn0WOOy-EFsJRHuqibGw4IFBahZe19BEkfWCNMcRWNTY-P1As~pG8wGEwcUPmhYTbczbM3tzTNQy-G6cMD3r8D2J0EiaWvfjlc3S6WTFzft1YuRyQMI35iM~38yyRZXXeef4AMJq9yWIJDPdlA3ZLAGB8Xa7N-j-JOnc8zgetmfisZ6~jnz3VTe7yBHV2IN3pE~D7QuHYGljfWTO5WRH-jbtj2SO-hl5wD28FZQA0-VsaItcTWqIyzw4ulUoxyPpj1ou1x-8nvoxEf-SA__',
      'https://s3-alpha-sig.figma.com/img/19ab/6244/48f5a6dca2bdadd16c9593fa5038aed2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L~i1cJJikr7kPszVOv4xX7z6dA2RLefLnDLEuvMAdJBGLfDAVf-BifVQI~EzRiMP0eyqUCR4U0f2~PD842KX4LRUTYlB5A70EKU01H2P3UiIpq~5SgqTHjjxSUsicK~IQQpS-JY2ANvYcvuEwLPqQXNmyaax~ReGoEVua8VzuV8ioggtc0m16~Jwei9hOioVxKVk2UYhNuIpB9K1PmkIZhYq2aRsXgCXd0Q8~DT8093ipHt-qKTmzjFoPzKoxkMk0fKksjybTZTi5GAMieQRzQ9q6e1WvnRjLbkb4AefNi3g0O4ex3aedPUqdHCQrWcMOBPlhs-2d5S7qOfzxVvfcQ__',
    ],
  },
  {
    heading: 'Creative Balloons',
    gallery: [
      'https://s3-alpha-sig.figma.com/img/5539/4470/e3de59ba4f2b4bc9b3c2b804733f7eac?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=piw1ZVquRH0wDMRKDy0Jk0qNVqLZpCQ3gn9OgTdUNW1zDudU6XbtQVIjuxkfLFa7B6B7Nrsb2RmcY6CWqzUjarrNLCnSOqGY8nYOs21kWDfaIt7s7JX36taJI-g1~bDP-YWXsxDik-xNa1uiBSfOx2Jr7ziOGj3nT~VVA2-lUKiD73Mq0E~391qjU9Jq9FOh2L6BJni0s-Fh8FCrh4OW7RA~ZePkZ88QCKhNqW-63EaO5~y5bqqzScpJ11N3qBhKnQoPe2LmRINu~sDAK0y2ZSkHURxvCA0BPdL78eZjUOCAculyp8V1wv0nlZ6XIWWQUbAnbFxV0BO9QzuvILZoHQ__',
      'https://s3-alpha-sig.figma.com/img/e977/57ab/5bbf3bd7eba2b7723ced537e3e5d9cbb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UxjdUPYQ2CY1lU~iAV08n3uDLeAo6GcpcmmZywtBuayFaGV3WHHqXrR865d3B1D1-yLeZ59t407dJd7kczC8IjOQC2DGOXCETjLldI7~SzgGb7OXfl8buJoVLwczooiPA4PeIB5KkAOJGfqr4pDN15Tmt1AqYlB2ABZtnBZ0R1jF29~2yGjEpmjSO~HNLFubiv6T716ZLI7E7~tXRugDBqr-YiYSsgaAJ~hLgek6Qc7t-DnAl3L0zbMHaCMucxVZSpbx72HQMzrVsOk5-3UlJdWQ5Xp6YPZtQwQ6VTdwbvbN5EVSi9JlV7RTRxJvPeKE-zopLfFOb2Z5G4nIflQtOw__',
      'https://s3-alpha-sig.figma.com/img/ae1b/b26b/ea0a8b29f02ca5a5c3328b05f353d19c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dPOt5pirKKzuKAzKs91MTBnzamZrwp9ebICoBXU-jMFnA2DvsM474VIARS7hD0BVM9kc5aqBo5aQJ15RQCBFivFN3wjULJqMRM5BPP9uUq~cVm-VhzHbq-ti~oPe~YDs7rPexe19zpmNAUFeo5PeJa171m0RHB~9PKA-1P~7qPx0q~F-EWvdvnvcUAyDwKhGMri9N-GiGYHkGUxfJjB2oUA8-ssQ47Azeaw0Of6PWQJQwildzF-8lv7ArmdiPuSwKtCa6gS-tFbfBA1U5HGvSqopW0UcLd65niUH7kqUUo8IQoZQNTfeo70eUHs9jrwCGxYvw3n85LXmgGHO5VHmNw__',
      'https://s3-alpha-sig.figma.com/img/ddae/9235/22bcf08112e1ec67816dce472acb1675?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hMREahZoi8ZHWCC2mSlvr9KDlZpJ1nxHF45jQky-v9lYHGjwVPQE6~AAJH3KCtvsuGCvpfnq2uabF9u2r3vwyuvm8ret2GtqC7M9fpEjp3~vQo7XUyzpnXsAEP2EFjeCgjqn5ZRmXQLUZU-zpfie~VNMUOQUcaeAjNeN1hp6LjB3ZbzAVZkAcKnDM8hiI2opowlUQzi2DuuXdCTw0WzXZhaRiawwmf7tQvYwE9oFLUL7tV5akAyM72v7hd~VsX-spvyHqVsC~2k90G53sZmGmqjStXs5O8jtsgIxLpAH1MoZy4FCj0vCY3euMREzesCWXlvKnKX1R2dAinlCqkGkdw__',
      'https://s3-alpha-sig.figma.com/img/2393/3a23/d50c11dbe9e754f58b7e49d2f340aacf?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=idoXUxtN4knqJ~iU7KpynIU65yM1~IuVAzruld6NPwtGy8scZe7Ic0X7YoMUzLeahAzx2exdEeX7uwOz6jW6yMHBMpCFCVc2l-0Z0k0tv8Fa59YjDb23lsoWJOFu16V65i3FmEctiLFmk3y7rer6~j4M~ZjYKcxIj1Oxg8bLacXrncQNLUSSpu5gvbQCVgnHd0Z7PiGupMPDvJBgSRv8bidR4horhD6hMXyMk6j1n2yvwydNyxuUMqa5VYqOGTutnTFIi41~tv7spcb0j4PeTx-3LLoRFu0VtLmfdk3neplcMDM8d2~nhSlIEKzVKAUl~fOueAqT1wIlSMttObkvuA__',
      'https://s3-alpha-sig.figma.com/img/90e2/efea/7331dd7b8d33087f27b56659c2510f95?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=su~Tyvq2h5pqJkTDLou0W6MHzjeHgIgkIAKANJP-iTj3T3GnLzHBWLdB1uU6xXeE~ylAWXvOVC0PjWt18emApEDlxDNr1G4LuaY8jbKl5sLiIP8cWDJE5g99vTAyCtq9LmEdvgQB2wR1J7xt3YIZtDLjcXvr9jyRsS5M3xDHPhWOLakjMZL8pgTMESCybbrP1qFdigjrRTkOh33HI8l0g~rf4TAoZO3TiKhlFXFFupT0DIMaLPTiW1gcYubOliKO9RkDSdktfR56CvTASNaqfumtwRPfL3Y9j3rzXbrIqBOygkk7LEgmok65tCPvez9TL~JvZpwdZoDGaVPTf-wLfQ__',
    ],
  },
];

export const useProfileStore = create<TProfileStore>()(
  persist(
    (set, get) => ({
      user: defaultUserData,
      gallery: defaultGallery,
      addImage: (uri: string) =>
        set({
          gallery: [...get().gallery, { heading: '', gallery: [uri] }],
        }),
      setUserData: (user: ProfileFormRequest) =>
        set({
          user: { ...get().user, ...user },
        }),
      resetUserData: () => {
        set({ user: { ...defaultUserData } });
      },
    }),
    {
      name: 'profile-storage',
      storage: {
        getItem: async (name: string) => {
          const data = await asyncStorage.getData(name);
          return data ? JSON.parse(data) : null;
        },
        setItem: async (name: string, value: StorageValue<TProfileStore>) => {
          await asyncStorage.setData(name, JSON.stringify(value));
        },
        removeItem: async (name: string) => {
          await asyncStorage.removeData(name);
        },
      },
    },
  ),
);
