import React, { useState } from 'react';
import { 
  X, 
  User, 
  Lock, 
  Mail, 
  Building2, 
  Phone, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Stethoscope 
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userEmail: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [hospital, setHospital] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Vui lòng nhập định dạng email hợp lệ.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Mật khẩu phải có tối thiểu 6 ký tự.');
      return;
    }

    // Simulate login / register success
    const userData = {
      email,
      fullName: isRegister ? fullName : email.split('@')[0],
      hospital: isRegister ? hospital : 'Đối tác Bệnh viện',
    };

    localStorage.setItem('medicare_current_user', JSON.stringify(userData));
    setSuccessMsg(isRegister ? 'Đăng ký tài khoản thành công!' : 'Đăng nhập thành công!');

    setTimeout(() => {
      onLoginSuccess(email);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden z-50 p-6 animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo & Headline */}
          <div className="text-center space-y-1 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 text-white flex items-center justify-center mx-auto shadow-md">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 pt-2">
              {isRegister ? 'Đăng Ký Tài Khoản Y Tế' : 'Đăng Nhập Cổng Đối Tác'}
            </h3>
            <p className="text-xs text-slate-500">
              {isRegister 
                ? 'Đăng ký để nhận bảng giá đại lý và tải trọn bộ hồ sơ thầu' 
                : 'Đăng nhập để theo dõi tiến độ đơn hàng và bảo hành thiết bị'}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-xl bg-slate-100 p-1 mb-5">
            <button
              type="button"
              onClick={() => {
                setIsRegister(false);
                setErrorMsg('');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                !isRegister ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Đăng Nhập
            </button>
            <button
              type="button"
              onClick={() => {
                setIsRegister(true);
                setErrorMsg('');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                isRegister ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Đăng Ký Đối Tác
            </button>
          </div>

          {/* Notifications */}
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            {isRegister && (
              <>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Họ và tên bác sĩ / Kỹ sư đại diện
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="BS. Nguyễn Văn A..."
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Bệnh viện / Cơ sở y tế công tác
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="VD: Bệnh viện Đa Khoa..."
                      value={hospital}
                      onChange={(e) => setHospital(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                    />
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số điện thoại liên hệ
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="0912 xxx xxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Email cơ sở y tế / cá nhân
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="bacsi@benhvien.vn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-semibold text-slate-700">
                  Mật khẩu
                </label>
                {!isRegister && (
                  <a href="#" className="text-[11px] text-sky-600 hover:underline">
                    Quên mật khẩu?
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Tối thiểu 6 ký tự..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-xs"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs shadow-md transition-all"
            >
              {isRegister ? 'Xác Nhận Đăng Ký Tài Khoản' : 'Đăng Nhập Cổng Quản Trị'}
            </button>
          </form>

          {/* Quick Demo Credentials */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-center text-[11px] text-slate-400">
            Tài khoản dùng thử: <strong className="text-slate-600">bacsi@benhvien.vn</strong> / MK: <strong className="text-slate-600">123456</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
