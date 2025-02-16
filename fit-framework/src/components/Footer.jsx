const Navbar = () => {
  return (
    <nav className='pt-3 bg-fitpurple-100'>
        <div className="relative pt-0.5 bg-gradient-to-r from-fitorange via-white to-fitpurple-50 mb-3"></div>
        <ul className='flex justify-between px-4'>
            <li className='flex flex-col items-center group cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="29" viewBox="0 0 48 29" fill="none" className='fill-fitpurple-50 group-hover:fill-fitorange group-focus:fill-fitorange'>
                    <path d="M9.71615 23.0937L8.21615 23.0938L11.2161 23.0937L9.71615 23.0937ZM9.71615 5.90624L11.2161 5.9063L8.21615 5.90614L9.71615 5.90624ZM38.2871 5.90624L39.7871 5.90924L36.7871 5.90168L38.2871 5.90624ZM38.2871 23.0937L36.7871 23.0983L39.7871 23.0906L38.2871 23.0937ZM11.7149 2V0.5C11.7028 0.5 11.6908 0.500146 11.6787 0.500437L11.7149 2ZM15.7156 2L15.7518 0.500437C15.7398 0.500146 15.7277 0.5 15.7156 0.5L15.7156 2ZM17.7145 4.08437L16.2149 4.04916C16.2146 4.0609 16.2145 4.07264 16.2145 4.08437H17.7145ZM17.7145 24.9156H16.2145C16.2145 24.9274 16.2146 24.9391 16.2149 24.9508L17.7145 24.9156ZM15.7156 27V28.5C15.7277 28.5 15.7397 28.4999 15.7517 28.4996L15.7156 27ZM11.7149 27L11.6788 28.4996C11.6908 28.4999 11.7029 28.5 11.7149 28.5L11.7149 27ZM9.71608 24.9156L11.2157 24.9508C11.2159 24.9391 11.2161 24.9273 11.2161 24.9156L9.71608 24.9156ZM3.99937 20.75L3.96331 22.2496C3.97533 22.2499 3.98735 22.25 3.99937 22.25L3.99937 20.75ZM2.00057 18.6656L3.50016 18.7008C3.50043 18.6891 3.50057 18.6773 3.50057 18.6656L2.00057 18.6656ZM2.00057 10.3344H3.50057C3.50057 10.3227 3.50043 10.3109 3.50016 10.2992L2.00057 10.3344ZM3.99937 8.25V6.75C3.98735 6.75 3.97533 6.75014 3.96331 6.75043L3.99937 8.25ZM9.71608 4.08437H11.2161C11.2161 4.07266 11.2159 4.06095 11.2157 4.04924L9.71608 4.08437ZM36.2851 27V28.5C36.2971 28.5 36.3092 28.4999 36.3212 28.4996L36.2851 27ZM32.2844 27L32.2483 28.4996C32.2603 28.4999 32.2723 28.5 32.2844 28.5V27ZM30.2856 24.9156L31.7851 24.9508C31.7854 24.9391 31.7856 24.9274 31.7856 24.9156L30.2856 24.9156ZM30.2856 4.08437H31.7856C31.7856 4.07264 31.7854 4.0609 31.7851 4.04916L30.2856 4.08437ZM32.2844 2V0.5C32.2723 0.5 32.2602 0.500145 32.2482 0.500436L32.2844 2ZM36.2851 2L36.3213 0.500437C36.3092 0.500146 36.2972 0.5 36.2851 0.5L36.2851 2ZM38.2839 4.08437L36.7843 4.04916C36.7841 4.0609 36.7839 4.07264 36.7839 4.08437L38.2839 4.08437ZM43.9975 8.25L44.0311 6.75038C44.0199 6.75013 44.0087 6.75 43.9975 6.75L43.9975 8.25ZM45.4328 8.87969L46.5149 7.84097L46.5145 7.84051L45.4328 8.87969ZM45.9994 10.3344L44.4998 10.2995C44.4996 10.3111 44.4994 10.3227 44.4994 10.3344L45.9994 10.3344ZM45.9994 18.6656H44.4994C44.4994 18.6774 44.4996 18.6891 44.4998 18.7008L45.9994 18.6656ZM44.0006 20.75V22.25C44.0126 22.25 44.0247 22.2499 44.0367 22.2496L44.0006 20.75ZM38.2839 24.9156H36.7839C36.7839 24.9274 36.7841 24.9391 36.7843 24.9508L38.2839 24.9156ZM8.21608 20.75C8.21608 22.0444 8.21608 21.9399 8.21615 23.0938L11.2161 23.0937C11.2161 21.9398 11.2161 22.0443 11.2161 20.75H8.21608ZM11.2161 23.0937C11.2161 21.4365 11.2161 22.2943 11.2161 21H8.21608C8.21608 22.2944 8.21608 21.4368 8.21615 23.0938L11.2161 23.0937ZM11.2161 21V20.75H8.21608V21H11.2161ZM11.2161 8.25C11.2161 6.95563 11.2161 7.50008 11.2161 5.9063L8.21615 5.90618C8.21608 7.49992 8.21608 6.95555 8.21608 8.25H11.2161ZM8.21615 5.90614C8.21613 6.15426 8.21612 6.26568 8.21611 6.31351C8.2161 6.33902 8.2161 6.3444 8.2161 6.3435C8.2161 6.34321 8.2161 6.34267 8.21611 6.34198C8.21611 6.3415 8.21611 6.33995 8.21613 6.33795C8.21613 6.33684 8.21616 6.33394 8.21617 6.33216C8.21621 6.32877 8.21641 6.31673 8.21661 6.30808C8.22042 6.23351 9.77607 4.84854 11.2145 6.27873C11.2153 6.29854 11.2159 6.32361 11.216 6.32885C11.216 6.33131 11.216 6.33518 11.2161 6.33658C11.2161 6.3375 11.2161 6.33906 11.2161 6.3397C11.2161 6.34098 11.2161 6.34197 11.2161 6.3424C11.2161 6.34331 11.2161 6.34399 11.2161 6.34415C11.2161 6.34471 11.2161 6.34485 11.2161 6.34395C11.2161 6.3425 11.2161 6.34077 11.2161 6.3389C11.2161 6.33826 11.2161 6.3371 11.2161 6.33616C11.2161 6.33595 11.2161 6.33527 11.2161 6.33444C11.2161 6.33414 11.2161 6.33301 11.2161 6.33158C11.2161 6.33074 11.2161 6.32839 11.216 6.32688C11.216 6.32347 11.2157 6.30428 11.2153 6.28848C9.72255 4.83788 8.21663 6.29737 8.2162 6.31918C8.21616 6.32305 8.21612 6.32856 8.21611 6.33021C8.21609 6.33249 8.21609 6.33431 8.21609 6.33452C8.21609 6.33556 8.21609 6.33641 8.21609 6.33662C8.21609 6.33825 8.21608 6.34165 8.21608 6.34661C8.21608 6.35744 8.21608 6.37974 8.21608 6.42256C8.21608 6.50826 8.21608 6.67641 8.21608 7H11.2161C11.2161 6.67639 11.2161 6.50827 11.2161 6.4226C11.2161 6.37974 11.2161 6.35759 11.2161 6.34693C11.2161 6.34115 11.2161 6.33955 11.2161 6.33964C11.2161 6.33966 11.2161 6.34037 11.2161 6.34133C11.2161 6.34149 11.2161 6.34328 11.2161 6.34554C11.2161 6.34718 11.216 6.35268 11.216 6.35654C11.2155 6.37835 9.70962 7.83785 8.2169 6.38724C8.21646 6.37145 8.21616 6.35226 8.21613 6.34886C8.21612 6.34735 8.2161 6.34501 8.2161 6.34418C8.21609 6.34278 8.21609 6.34169 8.21609 6.34144C8.21609 6.3407 8.21609 6.34015 8.21609 6.34011C8.21609 6.33985 8.21609 6.33995 8.21609 6.34086C8.21609 6.34209 8.21609 6.34464 8.21609 6.34637C8.21609 6.34706 8.21609 6.34851 8.2161 6.34983C8.2161 6.35017 8.2161 6.35101 8.2161 6.35204C8.2161 6.35252 8.21611 6.35356 8.21611 6.35488C8.21612 6.35553 8.21613 6.35711 8.21613 6.35804C8.21614 6.35946 8.21618 6.36333 8.21621 6.3658C8.21628 6.37105 8.21689 6.39612 8.21767 6.41594C9.65612 7.84614 11.2118 6.46116 11.2156 6.38658C11.2158 6.37794 11.216 6.36589 11.216 6.36248C11.216 6.3607 11.2161 6.35779 11.2161 6.35666C11.2161 6.35463 11.2161 6.35304 11.2161 6.3525C11.2161 6.35176 11.2161 6.35115 11.2161 6.35077C11.2161 6.34726 11.2161 6.3365 11.2161 6.31408C11.2161 6.26603 11.2161 6.15442 11.2161 5.90633L8.21615 5.90614ZM8.21608 7V8.25H11.2161V7H8.21608ZM39.7839 8.25C39.7839 7.60397 39.7847 7.01901 39.7855 6.59554C39.7859 6.38382 39.7863 6.21252 39.7866 6.09421C39.7868 6.03505 39.7869 5.98914 39.787 5.95804C39.787 5.9425 39.787 5.93066 39.7871 5.92272C39.7871 5.91875 39.7871 5.91575 39.7871 5.91376C39.7871 5.91276 39.7871 5.91201 39.7871 5.91152C39.7871 5.91127 39.7871 5.91109 39.7871 5.91096C39.7871 5.9109 39.7871 5.91086 39.7871 5.91083C39.7871 5.91082 39.7871 5.91081 39.7871 5.9108C39.7871 5.9108 39.7871 5.9108 38.2871 5.90624C36.7871 5.90168 36.7871 5.90168 36.7871 5.9017C36.7871 5.9017 36.7871 5.90172 36.7871 5.90174C36.7871 5.90177 36.7871 5.90182 36.7871 5.90189C36.7871 5.90203 36.7871 5.90223 36.7871 5.90249C36.7871 5.90301 36.7871 5.90379 36.7871 5.90482C36.7871 5.90687 36.7871 5.90993 36.7871 5.91396C36.7871 5.92202 36.787 5.93399 36.787 5.94966C36.7869 5.98102 36.7868 6.0272 36.7866 6.08664C36.7863 6.20553 36.7859 6.37747 36.7855 6.5899C36.7847 7.01471 36.7839 7.60162 36.7839 8.25H39.7839ZM36.7871 5.90324C36.7839 7.49601 36.7839 6.99807 36.7839 8.25H39.7839C39.7839 7.00193 39.7839 7.50399 39.7871 5.90924L36.7871 5.90324ZM36.7839 20.75C36.7839 22.0464 36.7848 22.0041 36.7871 23.0968L39.7871 23.0906C39.7848 21.9959 39.7839 22.0424 39.7839 20.75H36.7839ZM38.2871 23.0937C39.7871 23.0892 39.7871 23.0892 39.7871 23.0892C39.7871 23.0892 39.7871 23.0892 39.7871 23.0891C39.7871 23.0891 39.7871 23.0891 39.7871 23.089C39.7871 23.0889 39.7871 23.0887 39.7871 23.0885C39.7871 23.088 39.7871 23.0872 39.7871 23.0862C39.7871 23.0842 39.7871 23.0812 39.7871 23.0773C39.787 23.0693 39.787 23.0575 39.787 23.0419C39.7869 23.0108 39.7868 22.9649 39.7866 22.9058C39.7863 22.7874 39.7859 22.6162 39.7855 22.4044C39.7847 21.981 39.7839 21.396 39.7839 20.75H36.7839C36.7839 21.3984 36.7847 21.9853 36.7855 22.4101C36.7859 22.6225 36.7863 22.7944 36.7866 22.9133C36.7868 22.9728 36.7869 23.019 36.787 23.0503C36.787 23.066 36.7871 23.078 36.7871 23.086C36.7871 23.09 36.7871 23.0931 36.7871 23.0952C36.7871 23.0962 36.7871 23.097 36.7871 23.0975C36.7871 23.0977 36.7871 23.0979 36.7871 23.0981C36.7871 23.0981 36.7871 23.0982 36.7871 23.0982C36.7871 23.0983 36.7871 23.0983 36.7871 23.0983C36.7871 23.0983 36.7871 23.0983 38.2871 23.0937ZM18.6222 12C18.3592 12 18.2222 11.9862 18.0999 11.9778C18.0718 11.9758 18.0054 11.9712 17.9325 11.9712C17.8997 11.9712 17.669 11.9664 17.4057 12.0573C17.2536 12.1099 17.0099 12.221 16.7894 12.4575C16.5487 12.7156 16.426 13.0258 16.3925 13.3177C16.3401 13.7748 16.5177 14.1214 16.5264 14.1405C16.5641 14.2226 16.6068 14.2955 16.6087 14.2988C16.6218 14.3218 16.6224 14.3228 16.6241 14.326C16.6243 14.3263 16.6227 14.3234 16.6206 14.3189C16.6186 14.3144 16.6171 14.3106 16.6161 14.308C16.6092 14.289 16.6333 14.3396 16.6333 14.5H19.6333C19.6333 14.0132 19.5558 13.6153 19.4372 13.2874C19.3787 13.1256 19.3162 12.9979 19.2655 12.9036C19.2424 12.8608 19.2205 12.8227 19.2147 12.8127C19.1978 12.7829 19.2252 12.8286 19.2528 12.8887C19.2684 12.9228 19.3027 13.0007 19.3315 13.1064C19.3587 13.2064 19.4021 13.4062 19.373 13.6596C19.3403 13.9451 19.22 14.2498 18.9835 14.5035C18.767 14.7356 18.5293 14.8431 18.3852 14.8929C18.2416 14.9425 18.1231 14.9581 18.0654 14.9641C18.0021 14.9707 17.9535 14.9712 17.9315 14.9712C17.8919 14.9712 17.868 14.9689 17.8934 14.9707C17.9848 14.977 18.2344 15 18.6222 15V12ZM16.6333 14.5C16.6333 14.6943 16.5985 14.6196 16.6955 14.4327C16.7411 14.3451 16.8591 14.1496 17.1072 13.9826C17.2294 13.9004 17.4399 13.7876 17.7286 13.7521C18.0188 13.7164 18.4922 13.7562 18.8983 14.1252C19.3174 14.506 19.4055 15.0009 19.3777 15.3379C19.3514 15.6575 19.2278 15.8893 19.1418 16.0177C18.9669 16.2789 18.7598 16.3987 18.6757 16.4414C18.4907 16.5353 18.4204 16.5 18.6222 16.5V13.5C18.1732 13.5 17.7163 13.564 17.3176 13.7664C17.1266 13.8634 16.8559 14.0397 16.6491 14.3484C16.5472 14.5006 16.4156 14.754 16.3878 15.0916C16.3586 15.4465 16.4517 15.9556 16.8809 16.3456C17.2971 16.7238 17.7857 16.7677 18.0949 16.7297C18.4024 16.6918 18.6354 16.5703 18.7823 16.4714C19.0799 16.2711 19.2564 16.0108 19.3578 15.8157C19.5666 15.4137 19.6333 14.9529 19.6333 14.5H16.6333ZM20.1222 15V13.5H17.1222V15H20.1222ZM29.3778 16.5C29.5796 16.5 29.5092 16.5353 29.3243 16.4414C29.2402 16.3987 29.0331 16.2789 28.8582 16.0177C28.7722 15.8893 28.6486 15.6575 28.6223 15.3379C28.5945 15.001 28.6826 14.506 29.1016 14.1253C29.5077 13.7562 29.9811 13.7164 30.2714 13.7521C30.5601 13.7876 30.7706 13.9004 30.8928 13.9827C31.1409 14.1496 31.2589 14.3451 31.3045 14.4327C31.4015 14.6196 31.3667 14.6943 31.3667 14.5H28.3667C28.3667 14.9529 28.4334 15.4137 28.6422 15.8156C28.7436 16.0108 28.9201 16.2711 29.2176 16.4714C29.3645 16.5703 29.5976 16.6918 29.9051 16.7297C30.2143 16.7677 30.7029 16.7237 31.1191 16.3455C31.5483 15.9555 31.6414 15.4464 31.6121 15.0915C31.5843 14.754 31.4528 14.5006 31.3509 14.3484C31.1441 14.0397 30.8734 13.8634 30.6824 13.7664C30.2837 13.564 29.8268 13.5 29.3778 13.5V16.5ZM31.3667 14.5C31.3667 14.3396 31.3908 14.2889 31.3839 14.308C31.3829 14.3105 31.3814 14.3143 31.3794 14.3188C31.3773 14.3234 31.3757 14.3263 31.3759 14.326C31.3776 14.3228 31.3782 14.3218 31.3913 14.2987C31.3932 14.2954 31.4359 14.2226 31.4736 14.1405C31.4823 14.1214 31.6599 13.7748 31.6074 13.3176C31.5739 13.0258 31.4513 12.7156 31.2106 12.4575C30.99 12.221 30.7463 12.1099 30.5943 12.0573C30.331 11.9664 30.1003 11.9712 30.0675 11.9712C29.9946 11.9712 29.9282 11.9758 29.9001 11.9778C29.7778 11.9862 29.6408 12 29.3778 12V15C29.7656 15 30.0151 14.977 30.1066 14.9707C30.1319 14.9689 30.1081 14.9712 30.0685 14.9712C30.0465 14.9712 29.9979 14.9707 29.9346 14.9641C29.8769 14.9581 29.7583 14.9425 29.6148 14.8929C29.4707 14.8431 29.233 14.7356 29.0166 14.5035C28.7801 14.2499 28.6598 13.9451 28.627 13.6597C28.5979 13.4063 28.6413 13.2064 28.6685 13.1065C28.6972 13.0008 28.7315 12.9229 28.7472 12.8888C28.7748 12.8287 28.8022 12.7829 28.7852 12.8127C28.7795 12.8227 28.7576 12.8608 28.7345 12.9036C28.6837 12.9979 28.6213 13.1256 28.5628 13.2874C28.4442 13.6153 28.3667 14.0132 28.3667 14.5H31.3667ZM27.8778 13.5V15H30.8778V13.5H27.8778ZM11.2161 21V8.25H8.21608V21H11.2161ZM8.21608 7V20.75H11.2161V7H8.21608ZM36.7839 8.25V20.75H39.7839V8.25H36.7839ZM18.6222 16.5H29.3778V13.5H18.6222V16.5ZM29.3778 12H18.6222V15H29.3778V12ZM11.7149 3.5H15.7156V0.5H11.7149V3.5ZM15.6795 3.49956C15.9904 3.50707 16.2217 3.76089 16.2149 4.04916L19.2141 4.11959C19.2601 2.15942 17.7021 0.547496 15.7518 0.500437L15.6795 3.49956ZM16.2145 4.08437V24.9156H19.2145V4.08437H16.2145ZM16.2149 24.9508C16.2217 25.2391 15.9902 25.493 15.6796 25.5004L15.7517 28.4996C17.7022 28.4527 19.2601 26.8402 19.2141 24.8804L16.2149 24.9508ZM15.7156 25.5H11.7149V28.5H15.7156V25.5ZM11.7509 25.5004C11.4404 25.493 11.2089 25.2393 11.2157 24.9508L8.21649 24.8805C8.17058 26.8401 9.72816 28.4527 11.6788 28.4996L11.7509 25.5004ZM11.2161 24.9156V20.75H8.21608V24.9156H11.2161ZM9.71608 19.25H3.99937V22.25H9.71608V19.25ZM4.03543 19.2504C3.72493 19.243 3.4934 18.9893 3.50016 18.7008L0.500978 18.6305C0.455065 20.5901 2.01265 22.2027 3.96331 22.2496L4.03543 19.2504ZM3.50057 18.6656V10.3344H0.500567V18.6656H3.50057ZM3.50016 10.2992C3.4934 10.0107 3.72493 9.75703 4.03543 9.74957L3.96331 6.75043C2.01265 6.79734 0.455065 8.40988 0.500978 10.3695L3.50016 10.2992ZM3.99937 9.75H9.71608V6.75H3.99937V9.75ZM11.2161 8.25V4.08437H8.21608V8.25H11.2161ZM11.2157 4.04924C11.2089 3.76076 11.4403 3.50706 11.7511 3.49956L11.6787 0.500437C9.72832 0.5475 8.17058 2.15955 8.21649 4.1195L11.2157 4.04924ZM36.2851 25.5H32.2844V28.5H36.2851V25.5ZM32.3204 25.5004C32.0098 25.493 31.7784 25.2393 31.7851 24.9508L28.786 24.8804C28.7399 26.8401 30.2974 28.4527 32.2483 28.4996L32.3204 25.5004ZM31.7851 4.04916C31.7784 3.76073 32.0096 3.50707 32.3205 3.49956L32.2482 0.500436C30.2976 0.547497 28.7399 2.15958 28.786 4.11959L31.7851 4.04916ZM32.2844 3.5H36.2851V0.5H32.2844V3.5ZM36.2489 3.49956C36.5597 3.50706 36.7911 3.76089 36.7843 4.04916L39.7835 4.11959C39.8295 2.15942 38.2714 0.547498 36.3213 0.500437L36.2489 3.49956ZM36.7839 4.08437V8.25H39.7839V4.08437H36.7839ZM38.2839 9.75H43.9975V6.75H38.2839V9.75ZM43.9638 9.74962C44.1118 9.75294 44.251 9.81471 44.3511 9.91886L46.5145 7.84051C45.8634 7.16279 44.9699 6.77143 44.0311 6.75038L43.9638 9.74962ZM44.3506 9.91841C44.4504 10.0223 44.5031 10.1597 44.4998 10.2995L47.499 10.3693C47.5209 9.42839 47.1657 8.51894 46.5149 7.84097L44.3506 9.91841ZM44.4994 10.3344V18.6656H47.4994V10.3344H44.4994ZM44.4998 18.7008C44.5066 18.9891 44.2751 19.243 43.9646 19.2504L44.0367 22.2496C45.9871 22.2027 47.545 20.5902 47.499 18.6304L44.4998 18.7008ZM44.0006 19.25H38.2839V22.25H44.0006V19.25ZM36.7839 20.75V24.9156H39.7839V20.75H36.7839ZM36.7843 24.9508C36.7911 25.2391 36.5596 25.493 36.249 25.5004L36.3212 28.4996C38.2716 28.4527 39.8295 26.8402 39.7835 24.8804L36.7843 24.9508ZM31.7856 24.9156V14.5H28.7856V24.9156H31.7856ZM31.7856 14.5V4.08437H28.7856V14.5H31.7856Z"/>
                </svg>
                <p className='text-fitpurple-50 text-[.725rem] mt-1 group-hover:text-fitorange group-focus:text-fitorange'>Exercise</p>
            </li>
            <li className='flex flex-col items-center group cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none" className='stroke-fitpurple-50 group-hover:stroke-white group-focus:stroke-white'>
                    <path d="M22.2222 9.82703L16 19.1941M30 16.0718C29.9968 18.1694 29.5258 20.2396 28.6213 22.1307C27.7169 24.0217 26.4021 25.6855 24.7733 27H7.22665C5.38187 25.5111 3.94339 23.5771 3.04568 21.3788C2.14798 19.1804 1.82037 16.7895 2.09349 14.4295C2.36661 12.0696 3.23154 9.81765 4.60741 7.88431C5.98327 5.95097 7.82515 4.39934 9.96085 3.37449C12.0965 2.34963 14.4563 1.88502 16.8195 2.0241C19.1827 2.16317 21.4722 2.90138 23.4739 4.16971C25.4756 5.43804 27.1242 7.19508 28.2655 9.27655C29.4068 11.358 30.0036 13.696 30 16.0718Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-fitpurple-50 text-[.725rem] mt-1 group-hover:text-white group-focus:text-white'>Dashboard</p>
            </li>
            <li className='flex flex-col items-center group cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className='stroke-fitpurple-50 group-hover:stroke-fitblue group-focus:stroke-fitblue'>
                    <path d="M13.3445 4.54034L10.5659 2M4.08207 9.01352C8.36019 4.93169 12.4853 8.04166 14.0131 9.74241C15.5677 8.044 20.5289 5.0013 24.8816 9.0775C30.3224 14.1727 24.1043 24.3632 19.4407 26.5469C17.1089 27.6388 14.0131 26.5061 14.0131 25.7782C14.0131 26.5071 11.7214 27.6004 9.42972 26.5071C4.84613 24.3204 -1.26542 14.1158 4.08207 9.01352Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-fitpurple-50 text-[.725rem] mt-1 group-hover:text-fitblue group-focus:text-fitblue'>Nutrition</p>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar